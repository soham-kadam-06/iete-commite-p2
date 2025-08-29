"use client"

import { useEffect, useState } from "react"

export default function CursorRobot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [eyePosition, setEyePosition] = useState({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Calculate eye positions to follow cursor
      const robotX = window.innerWidth - 80 // Robot position
      const robotY = window.innerHeight - 80
      
      // Left eye position
      const leftEyeCenterX = robotX - 8
      const leftEyeCenterY = robotY - 8
      
      // Right eye position  
      const rightEyeCenterX = robotX + 8
      const rightEyeCenterY = robotY - 8
      
      // Calculate angles for eyes to look at cursor
      const leftAngle = Math.atan2(e.clientY - leftEyeCenterY, e.clientX - leftEyeCenterX)
      const rightAngle = Math.atan2(e.clientY - rightEyeCenterY, e.clientX - rightEyeCenterX)
      
      // Limit eye movement within eye socket (radius of 3px)
      const eyeRadius = 3
      
      setEyePosition({
        leftX: Math.cos(leftAngle) * eyeRadius,
        leftY: Math.sin(leftAngle) * eyeRadius,
        rightX: Math.cos(rightAngle) * eyeRadius,
        rightY: Math.sin(rightAngle) * eyeRadius
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 pointer-events-none z-50">
      <div className="relative">
        {/* Robot body */}
        <div className="w-16 h-20 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl shadow-2xl border-2 border-primary/40 relative overflow-hidden">
          {/* Robot head */}
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl mx-auto mt-1 relative border border-primary/30">
            {/* Eyes container */}
            <div className="flex items-center justify-center gap-4 h-full">
              {/* Left eye socket */}
              <div className="relative w-6 h-6 bg-background/20 rounded-full border border-background/30">
                <div 
                  className="absolute w-3 h-3 bg-background rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                  style={{
                    transform: `translate(calc(-50% + ${eyePosition.leftX}px), calc(-50% + ${eyePosition.leftY}px))`
                  }}
                >
                  <div className="w-1 h-1 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              
              {/* Right eye socket */}
              <div className="relative w-6 h-6 bg-background/20 rounded-full border border-background/30">
                <div 
                  className="absolute w-3 h-3 bg-background rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                  style={{
                    transform: `translate(calc(-50% + ${eyePosition.rightX}px), calc(-50% + ${eyePosition.rightY}px))`
                  }}
                >
                  <div className="w-1 h-1 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
            
            {/* Robot mouth */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-background/30 rounded-full" />
          </div>
          
          {/* Robot antenna */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-4 bg-primary/80 rounded-full" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce mx-auto" />
          </div>
          
          {/* Robot chest panel */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-background/10 rounded border border-background/20">
            <div className="flex justify-center items-center h-full gap-1">
              <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Robot arms */}
          <div className="absolute top-6 -left-2 w-2 h-6 bg-primary/70 rounded-full" />
          <div className="absolute top-6 -right-2 w-2 h-6 bg-primary/70 rounded-full" />
        </div>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 w-16 h-20 bg-primary/30 rounded-2xl blur-xl animate-pulse" />
        <div className="absolute inset-0 w-16 h-20 bg-primary/20 rounded-2xl blur-2xl" />
        
        {/* Floating particles around robot */}
        <div className="absolute -top-2 -left-2 w-1 h-1 bg-primary/60 rounded-full animate-ping" />
        <div className="absolute -top-1 -right-3 w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-1 -left-3 w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}