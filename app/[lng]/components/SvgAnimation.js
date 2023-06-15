"use client"
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import styles from '@/style/styles.module.scss'

export default function SvgAnimation(
  { childrenContent,
    widthSVG,
    heightSVG,
    d,
    strokeDasharray,
    timeOutMilis = 50,
    delayMilis = 0,
    triggerReplay = true,
    delayReplay = 10000,
    start= false,
  },
) {
  const ref = useRef(null)
  const isOnScreen = useIntersection(ref, 0.1)
  const [value, setValue] = useState(strokeDasharray + 0.01)
  const startAfter = (delayMilis) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, delayMilis);
    });
  }
  useEffect(() => {
    if (isOnScreen && start) handleAnimation(triggerReplay)
    return () => {}
  }, [value, isOnScreen, start])
  useEffect(() => {
    const startAnimation = async () => {
      await startAfter(delayMilis)
    }
    startAnimation().then(() => {})
  })
  const handleAnimation = (isReplay) => {
    if (!isOnScreen || !start) {
      setValue(strokeDasharray + 0.01)
    }
    if (isReplay) {
      if (isOnScreen && Math.floor(value) > 0) {
        setTimeout(() => {
          setValue(value - 10)
        }, timeOutMilis)
      }

      if (isOnScreen && Math.floor(value) === 0) {
        setValue(strokeDasharray * 2)
      }
    }
    if (!isReplay) {
      if (isOnScreen && Math.floor(value) > 0) {
        setTimeout(() => {
          setValue(value - 10)
        }, timeOutMilis)
      }
    }
  }

  const content = () => {
    return (
      <div className={'relative flex justify-center items-center'}>
        <svg width={widthSVG} height={heightSVG} className={(Math.floor(value) === 0 && !triggerReplay) ? `opacity-0 ${styles['hide']}` : 'opacity-100'}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor={'#7fcbc3'}/>
              <stop offset="35%" stopColor={'#7fcbc3'}/>
              <stop offset="100%"   stopColor={'#71bad9'}/>
            </linearGradient>
          </defs>
          <path
            className="path"
            fill="transparent"
            stroke={'url(#gradient)'}
            strokeWidth="2"
            d={d}
            style={{strokeDasharray: `${strokeDasharray}px`, strokeDashoffset: `${value}px`, transition: `all ${timeOutMilis / 1000}s ease`}}
          />
        </svg>
        <div
          className={`absolute ${!(Math.floor(value) === 0 && !triggerReplay) ? `opacity-0 ${styles['hide']}` : 'opacity-100'}`}
          style={{transition: 'all 0.5s ease-in-out'}}
        >
          {childrenContent && typeof childrenContent === 'function' ? childrenContent() : <></>}
        </div>
      </div>
    )
  }


  return (
    <div ref={ref}>
      {content()}
    </div>
  )
}
