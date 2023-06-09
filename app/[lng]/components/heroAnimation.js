"use client"
import styles from '@/style/styles.module.scss'
import Image from "next/image";
import {TECHS} from "@/constants/constant";
import CurvePathAnimation from "@/app/[lng]/components/CurvePathAnimation";
import {useEffect, useState} from "react";
export default function HeroAnimation() {
  const showTech = ['React', 'JavaScript', 'Java', 'Vue']
  useEffect(() => {
    // setStartSequence([false, false, false, false])
  })

  return (
    <div className={'relative w-[50rem]'}>
      <div className={'flex justify-center items-center w-full'}>
        <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 absolute max-w-full max-h-full'}>
          <Image
            width={600}
            height={400}
            className={'block opacity-100 border-none m-0 p-0 max-w-full max-h-full'}
            alt="" aria-hidden="true"
            src={'/images/softzone.png'}
          />
        </span>
        <div className={'grid grid-cols-4 gap-y-48 gap-x-36'}>
          {
            TECHS.LANGUAGE.map((item, index) => {
              return (
                showTech.indexOf(item.name) >= 0
                ? (<div key={index} className={`${styles['program-card-animate']}`}>
                    <div className={'flex justify-center items-center h-full w-full'}>
                        <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full max-h-full'}>
                          <Image
                            width={item.width / 2}
                            height={item.height / 2}
                            className={'block opacity-100 border-none m-0 p-0 max-w-full max-h-full'}
                            alt="" aria-hidden="true"
                            src={item.avatarUrl}
                          />
                        </span>
                    </div>
                  </div>)
                : (<div></div>)
              )
            })
          }
        </div>
      </div>
      <div className={'absolute top-20 left-12'}>
        <CurvePathAnimation
          widthSVG={60}
          heightSVG={100}
          defaultValue={130}
          isStart={false}
          d={'M54.46875,86.375 L21,86.375 Q1,86.375 1,66.375 L1,1'}
          strokeColor={'#05a'}
          delayMilis={1000}
        />
      </div>
      <div className={'absolute top-16 left-[20.5rem]'}>
        <CurvePathAnimation
          widthSVG={100}
          heightSVG={60}
          defaultValue={130}
          d={'M 54 26 L 54 13 Q 54 1 42 1 L 1 1'}
          strokeColor={'#05a'}
          delayMilis={3000}
        />
      </div>
      <div className={'absolute top-16 right-[9.5rem]'}>
        <CurvePathAnimation
          widthSVG={100}
          heightSVG={60}
          defaultValue={130}
          d={'M 54 26 L 54 13 Q 54 1 42 1 L 1 1'}
          strokeColor={'#05a'}
          delayMilis={5000}
        />
      </div>
      <div className={'absolute top-20 right-[2rem]'}>
        <CurvePathAnimation
          widthSVG={60}
          heightSVG={100}
          defaultValue={130}
          d={'M 55 1 L 55 22 Q 55 29 45 29 L 24 29'}
          strokeColor={'#05a'}
          delayMilis={7000}
        />
      </div>
    </div>
  )
}
