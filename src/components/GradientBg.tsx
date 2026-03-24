import { useEffect, useRef } from "react"

export function GradientBg() {
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let curX = 0, curY = 0, tgX = 0, tgY = 0

    const move = () => {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      if (interactiveRef.current) {
        interactiveRef.current.style.transform =
          `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      }
      requestAnimationFrame(move)
    }

    const onMouseMove = (e: MouseEvent) => { tgX = e.clientX; tgY = e.clientY }
    window.addEventListener("mousemove", onMouseMove)
    move()
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <div className="gradient-bg">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -5" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        <div className="interactive" ref={interactiveRef} />
      </div>
    </div>
  )
}
