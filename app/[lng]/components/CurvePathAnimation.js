"use client"
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import styles from '@/style/styles.module.scss'

export default function CurvePathAnimation({widthSVG, heightSVG, d, defaultValue, timeOutMilis = 50, strokeColor, delayMilis = 0}) {
  const ref = useRef(null)
  const isOnScreen = useIntersection(ref, 0.1)
  const [value, setValue] = useState(defaultValue + 0.01)
  const [start, setStart] = useState(false)
  const startAfterSeconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, delayMilis);
    });
  }
  useEffect(() => {
    if (start && value !== defaultValue) {
      handleAnimation()
    }
    return () => {}
  }, [value, isOnScreen, start])
  useEffect(() => {
    // setStartSequence([false, false, false, false])
    const startAnimation = async () => {
      const start = await startAfterSeconds(1000)
      setStart(start)
    }
    startAnimation().then(() => {})
  })

  const handleAnimation = () => {
    if (isOnScreen && Math.floor(value) > 0) {
      setTimeout(() => {
        setValue(value - 10)
      }, timeOutMilis)
    }

    if (isOnScreen && Math.floor(value) === 0) {
      setValue(defaultValue * 2)
    }

    if (!isOnScreen) {
      setValue(defaultValue)
    }
  }

  const content = () => {
    return (
      <svg width={widthSVG} height={heightSVG}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={strokeColor}/>
            <stop offset="100%" stopColor={strokeColor}/>
          </linearGradient>
        </defs>
        <path
          className="path"
          fill="none"
          stroke={'url(#gradient)'}
          strokeWidth="2"
          d={d}
          style={{strokeDasharray: `${defaultValue}px`, strokeDashoffset: `${value}px`, transition: 'all 0.05s'}}
        />
      </svg>
    )
  }


  return (
    <div ref={ref}>
      {content()}
    </div>
  )
}
