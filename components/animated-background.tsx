"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced particle system with high visibility
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
      pulse: number
      trail: Array<{ x: number; y: number; opacity: number }>
    }> = []

    // Create many more particles for high visibility
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.4,
        hue: Math.random() * 60 + 160, // Teal to cyan range
        pulse: Math.random() * Math.PI * 2,
        trail: []
      })
    }

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      rotation: number
      rotationSpeed: number
      type: 'triangle' | 'square' | 'hexagon'
      hue: number
    }> = []

    for (let i = 0; i < 20; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 30 + 15,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'square' | 'hexagon',
        hue: Math.random() * 60 + 160
      })
    }

    // Draw geometric shapes
    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      
      ctx.strokeStyle = `hsla(${shape.hue}, 70%, 60%, 0.3)`
      ctx.lineWidth = 2
      ctx.fillStyle = `hsla(${shape.hue}, 70%, 60%, 0.1)`

      ctx.beginPath()
      
      if (shape.type === 'triangle') {
        ctx.moveTo(0, -shape.size / 2)
        ctx.lineTo(-shape.size / 2, shape.size / 2)
        ctx.lineTo(shape.size / 2, shape.size / 2)
        ctx.closePath()
      } else if (shape.type === 'square') {
        ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
      } else if (shape.type === 'hexagon') {
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3
          const x = Math.cos(angle) * shape.size / 2
          const y = Math.sin(angle) * shape.size / 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
      }
      
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    // Connection lines between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(${particles[i].hue}, 70%, 60%, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      // Create trailing effect instead of clearing completely
      ctx.fillStyle = 'rgba(8, 47, 73, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const time = Date.now() * 0.001
      
      // Update and draw shapes
      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Wrap around edges
        if (shape.x < -50) shape.x = canvas.width + 50
        if (shape.x > canvas.width + 50) shape.x = -50
        if (shape.y < -50) shape.y = canvas.height + 50
        if (shape.y > canvas.height + 50) shape.y = -50

        drawShape(shape)
      })

      // Draw connections first (behind particles)
      drawConnections()

      // Update and draw particles
      particles.forEach((particle) => {
        // Store trail positions
        particle.trail.unshift({ x: particle.x, y: particle.y, opacity: particle.opacity })
        if (particle.trail.length > 8) particle.trail.pop()

        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.03

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw trail
        particle.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (1 - index / particle.trail.length) * 0.5
          const trailSize = particle.size * (1 - index / particle.trail.length)
          
          ctx.beginPath()
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${trailOpacity})`
          ctx.fill()
        })

        // Draw main particle with enhanced pulsing effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 1.5
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.3
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        
        // Create enhanced gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${pulseOpacity})`)
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 60%, ${pulseOpacity * 0.6})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`)
        
        ctx.fillStyle = gradient
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ 
        background: "linear-gradient(135deg, rgba(8, 47, 73, 0.9) 0%, rgba(0, 77, 64, 0.8) 50%, rgba(6, 78, 59, 0.9) 100%)"
      }} 
    />
  )
}