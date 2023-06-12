"use client"
import styles from '@/style/styles.module.scss'
import Image from "next/image";
import {TECHS} from "@/constants/constant";
import CurvePathAnimation from "@/app/[lng]/components/CurvePathAnimation";
import {useEffect, useState} from "react";
export default function HeroAnimation() {
  const showTech = [
    {
      name: 'JavaScript',
      delayMilis: 1000,
    },
    {
      name: 'Java',
      delayMilis: 2000,
    },
    {
      name: 'Vue',
      delayMilis: 4000,
    },
    {
      name: 'React',
      delayMilis: 5000,
    },
  ]
  const techRender = TECHS.LANGUAGE.filter(item => showTech.map(item => item.name).indexOf(item.name) >= 0)
  useEffect(() => {
    // setStartSequence([false, false, false, false])
  })

  return (
    <div className={`${styles['animation-render']} relative w-[50rem]`}>
      <div className={'flex justify-center items-center w-full'}>
        <div className={`box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 absolute top-24 w-[505px] h-[255px]`}>
          <CurvePathAnimation
            d={'M 13 1 H 489 Q 500 1 500 11 V 240 Q 500 250 490 250 H 13 Q 3 250 3 240 Q 3 125.5 3 11 Q 3 1 13 1 M 13 10 L 432 10 V 50 H 13 V 10 M 470 10 Q 490 10 490 30 Q 490 50 470 50 Q 450 50 450 30 Q 450 10 470 10 M 13 60 H 432 V 210 H 13 V 60'}
            widthSVG={505}
            heightSVG={255}
            strokeDasharray={1500}
            isStart={false}
            strokeColor={'#05a'}
            delayMilis={1200}
            triggerReshape={false}
            childrenContent={() => {
              return (
                <div className={`relative w-full h-full ${styles['bg-animate']} rounded-2xl`}>
                  <div className={`absolute ${styles['header']}`}>
                    <h2><i>Technology for Future.</i></h2>
                  </div>
                  <div className={`absolute ${styles['content']}`}>
                    <h1><i>Together we success.</i></h1>
                  </div>
                  <div className={`absolute ${styles['illusion']}`}>
                  </div>
                </div>
              )
            }}
          />
        </div>
        <div className={'grid grid-cols-4 gap-y-48 gap-x-36'}>
          {
            techRender.map((item, index) => {
              return (
                (<div key={index}>
                    <CurvePathAnimation
                      d={'M 3 10 Q 3.006 2.998 10 2.991 H 73 Q 80 3 80 10 V 73 Q 80 80 73 80 H 10.016 Q 3 80 3 73 V 10.003'}
                      widthSVG={85}
                      heightSVG={85}
                      strokeDasharray={500}
                      isStart={false}
                      strokeColor={'#05a'}
                      delayMilis={showTech[index].delayMilis}
                      triggerReshape={false}
                      childrenContent={() => {
                        return (
                          <div className={`${styles['program-card-animate']} flex justify-center items-center h-full w-full`}>
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
                        )
                      }}
                    />

                  </div>)
              )
            })
          }
        </div>
      </div>
      <div className={'absolute top-20 left-12'}>
        <CurvePathAnimation
          widthSVG={50}
          heightSVG={100}
          strokeDasharray={130}
          isStart={false}
          d={'M 8 3 V 83 Q 8 93 18 93 H 59'}
          strokeColor={'#05a'}
          delayMilis={1000}
        />
      </div>
      <div className={'absolute top-16 left-[20.5rem]'}>
        <CurvePathAnimation
          widthSVG={100}
          heightSVG={60}
          strokeDasharray={130}
          d={'M 2 2 H 56 Q 70 2 70 14 V 27'}
          strokeColor={'#05a'}
          delayMilis={3000}
        />
      </div>
      <div className={'absolute top-16 right-[9.5rem]'}>
        <CurvePathAnimation
          widthSVG={100}
          heightSVG={60}
          strokeDasharray={130}
          d={'M 2 2 H 56 Q 70 2 70 14 V 27'}
          strokeColor={'#05a'}
          delayMilis={5000}
        />
      </div>
      <div className={'absolute top-20 right-[2rem]'}>
        <CurvePathAnimation
          widthSVG={60}
          heightSVG={100}
          strokeDasharray={130}
          d={'M 55 1 L 55 22 Q 55 29 45 29 L 24 29'}
          strokeColor={'#05a'}
          delayMilis={7000}
        />
      </div>
    </div>
  )
}
