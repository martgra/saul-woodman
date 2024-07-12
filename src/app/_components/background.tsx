// components/ScrollFadeBackground.tsx
'use client'

import { useEffect, useState } from 'react'

const ScrollFadeBackground = ({ children }: { children: React.ReactNode }) => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = 1 - scrollY / 1000 // Adjust the divisor for a slower fade effect
      setOpacity(newOpacity < 0 ? 0 : newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-[url('/assets/background.jpg')] bg-cover bg-fixed bg-center transition-opacity"
        style={{ opacity }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default ScrollFadeBackground
