"use client"
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import styles from '@/style/styles.module.scss'

export default function IncreaseNumber({defaultValue, maxValue, timeOut, title, content}) {
  const ref = useRef(null)
  const isOnScreen = useIntersection(ref, 0.1)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if (isOnScreen && value < maxValue) {
      setTimeout(() => {
        setValue(value + 1)
      }, timeOut)
    }

    return () => {}
  })


  return (
    <div ref={ref} className={`${styles['shadow-card']} max-w-xs bg-white px-6 py-12 rounded-2xl hover:${styles['text-wink-dark']} duration-300 flex flex-col items-center`}>
      <p className="text-5xl font-bold text-center">{isOnScreen ? value : defaultValue}+</p>
      <p className="text-2xl font-bold text-center mt-5">{title}</p>
      <p className="text-text-secondary text-sm text-center mt-2">{content}</p>
    </div>
  )
}
