"use client"

import { useEffect, useState } from "react"

export default function CursorRobot() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      // Smooth following with slight delay
      animationFrame = requestAnimationFrame(() => {
        setPosition(prev => ({
          x: prev.x + (e.clientX - prev.x) * 0.1,
          y: prev.y + (e.clientY - prev.y) * 0.1
        }))
      })
      
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isVisible])

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 25,
        top: position.y - 25,
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
      }}
    >
      <div className="relative">
        {/* Robot body */}
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg border border-primary/30 animate-pulse">
          {/* Robot face */}
          <div className="flex items-center justify-center h-full">
            {/* Eyes */}
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-background rounded-full animate-ping" style={{ animationDelay: '0s' }} />
              <div className="w-1.5 h-1.5 bg-background rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* Robot antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-3 bg-primary/60" />
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
          </div>
          
          {/* Robot arms */}
          <div className="absolute top-2 -left-1 w-1 h-2 bg-primary/60 rounded-full" />
          <div className="absolute top-2 -right-1 w-1 h-2 bg-primary/60 rounded-full" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-lg blur-md animate-pulse" />
        
        {/* Trail effect */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-lg animate-ping" />
      </div>
    </div>
  )
}