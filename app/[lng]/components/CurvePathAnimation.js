"use client"
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import styles from '@/style/styles.module.scss'

export default function CurvePathAnimation(
  {childrenContent, widthSVG, heightSVG, d, strokeDasharray, timeOutMilis = 50, strokeColor, strokeAfterMilis, delayMilis = 0, triggerReshape = true}
) {
  const ref = useRef(null)
  const isOnScreen = useIntersection(ref, 0.1)
  const [value, setValue] = useState(strokeDasharray + 0.01)
  const [start, setStart] = useState(false)
  const startAfterSeconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, delayMilis);
    });
  }
  useEffect(() => {
    if (start && value !== strokeDasharray) {
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

    if (isOnScreen && Math.floor(value) === 0 && triggerReshape) {
      setValue(strokeDasharray * 2)
    }

    if (!isOnScreen) {
      setValue(strokeDasharray)
    }
  }

  const content = () => {
    return (
      <div className={'relative flex justify-center items-center'}>
        <svg width={widthSVG} height={heightSVG} className={(Math.floor(value) === 0 && !triggerReshape) ? `opacity-0 ${styles['hide']}` : 'opacity-100'}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor={'#7fcbc3'}/>
              <stop offset="100%"   stopColor={'#71bad9'}/>
              <stop offset="35%" stopColor={'#7fcbc3'}/>
            </linearGradient>
          </defs>
          <path
            className="path"
            fill="transparent"
            stroke={'url(#gradient)'}
            strokeWidth="2"
            d={d}
            style={{strokeDasharray: `${strokeDasharray}px`, strokeDashoffset: `${value}px`, transition: 'all 0.05s ease'}}
          />
        </svg>
        <span
          className={`absolute ${!(Math.floor(value) === 0 && !triggerReshape) ? `opacity-0 ${styles['hide']}` : 'opacity-100'} w-full h-full`}
          style={{transition: 'all 0.5s ease-in-out'}}
        >
          {childrenContent && typeof childrenContent === 'function' ? childrenContent() : <></>}
        </span>
      </div>
    )
  }


  return (
    <div ref={ref}>
      {content()}
    </div>
  )
}
