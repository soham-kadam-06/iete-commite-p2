"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Wave patterns
      ctx.strokeStyle = "rgba(32, 178, 170, 0.1)"
      ctx.lineWidth = 2

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i * 2) * 50 + i * 30
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Floating orbs
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + Math.sin(time + i) * 100
        const y = canvas.height / 2 + Math.cos(time * 0.7 + i) * 150
        const radius = 20 + Math.sin(time + i) * 10

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, "rgba(32, 178, 170, 0.3)")
        gradient.addColorStop(1, "rgba(32, 178, 170, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Grid pattern
      ctx.strokeStyle = "rgba(32, 178, 170, 0.05)"
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 5, 0)
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 5, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 5)
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 5)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
