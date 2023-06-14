"use client"
import styles from '@/style/styles.module.scss'
import Image from "next/image";
import {TECHS} from "@/constants/constant";
import SvgAnimation from "@/app/[lng]/components/SvgAnimation";
import {useEffect, useState} from "react";
export default function HeroAnimation() {
  const GRID_TOTAL = 18
  const GRID_ARRAY = Array(GRID_TOTAL).fill({isShow: false})
  const SHOW_TECH = [
    {name: 'JavaScript', position: 1, delayMilis: 500},
    {name: 'Java', position: 2, delayMilis: 500},
    {name: 'Spring Boot', position: 15, delayMilis: 500},
    {name: 'React', position: 16, delayMilis: 500}
  ]
  const getTechRender = () => {
    const techs = TECHS.LANGUAGE.filter((item, index) => SHOW_TECH.map(item => item.name).indexOf(item.name) >= 0)
    for (const tech of techs) {
      const showTech = SHOW_TECH.filter(item => item.name === tech.name)[0]
      GRID_ARRAY[showTech.position] = {
        ...showTech,
        ...tech,
        isShow: true,
      }
    }
    return [...GRID_ARRAY]
  }
  useEffect(() => {
    // setStartSequence([false, false, false, false])
  })

  return (
    <div className={`${styles['animation-render']} relative w-[820px] h-[500px]`}>
      <div className={'flex justify-center items-center'}>
        <div className={`inline-block opacity-100 border-none m-0 p-0 absolute top-[7.5rem]`}>
          <SvgAnimation
            d={'M 20 5 H 485 Q 500 5 500 20 V 240 Q 500 255 485 255 H 20 Q 5 255 5 240 V 20 Q 5 5 20 5 M 100 20 L 370 20 Q 375 20 375 25 V 35 Q 375 40 370 40 H 100 Q 95 40 95 35 V 25 Q 95 20 100 20 M 25 20 H 65 Q 70 20 70 25 V 35 Q 70 40 65 40 H 25 Q 20 40 20 35 V 24 Q 20 20 25 20 M 435 20 H 485 Q 490 20 490 25 V 35 Q 490 40 485 40 H 435 Q 430 40 430 35 V 25 Q 430 20 435 20'}
            widthSVG={505}
            heightSVG={260}
            strokeDasharray={1500}
            timeOutMilis={15}
            isStart={false}
            strokeColor={'#05a'}
            delayMilis={1000}
            triggerReplay={false}
            childrenContent={() => {
              return (
                <div className={`${styles['bg-animate']} relative w-[495px] h-[250px] rounded- overflow-hidden`}>
                  <div className={`absolute flex ${styles['header']}`}>
                    <div className={`${styles['header-logo']}`}>
                      <span>Techs</span>
                    </div>
                    <div className={`${styles['header-search']} flex items-center`}>
                      <div className={'ml-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px">
                          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
                        </svg>
                      </div>
                      <div className={'ml-3'}><span>search</span></div>
                    </div>
                    <div className={`${styles['header-toggle']}`}>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,64,64" width="25px" height="25px" fill="#f27405">
                          <path d="M 0 7.5 V 12.5 H 50 V 7.5 Z M 0 22.5 V 27.5 H 50 V 22.5 Z M 0 37.5 V 42.5 H 50 V 37.5 Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute ${styles['content']}`}></div>
                  <div className={`absolute ${styles['illusion']}`}>
                    <div className={`${styles['block-1']}`}></div>
                    <div className={`${styles['block-2']}`}></div>
                    <div className={`${styles['block-3']}`}></div>
                  </div>
                </div>
              )
            }}
          />
        </div>
        <div className={'grid grid-cols-6 gap-y-32 gap-x-16'}>
          {
            getTechRender().map((item, index) => {
              return item.isShow
                ? (
                  <div key={index}>
                    <SvgAnimation
                      d={'M 3 10 Q 3.006 2.998 10 2.991 H 73 Q 80 3 80 10 V 73 Q 80 80 73 80 H 10.016 Q 3 80 3 73 V 10.003'}
                      widthSVG={82}
                      heightSVG={82}
                      timeOutMilis={30}
                      strokeDasharray={500}
                      isStart={false}
                      strokeColor={'#05a'}
                      delayMilis={item.delayMilis}
                      triggerReplay={false}
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
                  </div>
                )
                : (
                  <div key={index} className={`${styles['program-card-animate']} !shadow-none flex justify-center items-center h-full w-full`}></div>
                )
            })
          }
        </div>
      </div>
      <div className={'absolute top-[2.8rem] left-[14.3rem]'}>
        <SvgAnimation
          widthSVG={55}
          heightSVG={85}
          strokeDasharray={130}
          isStart={false}
          d={'M 5 5 H 40 Q 50 5 50 15 V 80'}
          strokeColor={'#05a'}
          delayMilis={5000}
        />
      </div>
      <div className={'absolute top-[2.8rem] left-[23.3rem]'}>
        <SvgAnimation
          widthSVG={55}
          heightSVG={85}
          strokeDasharray={130}
          isStart={false}
          d={'M 5 5 H 40 Q 50 5 50 15 V 80'}
          strokeColor={'#05a'}
          delayMilis={7000}
        />
      </div>
      <div className={'absolute bottom-[2.9rem] right-[14.3rem]'}>
        <SvgAnimation
          widthSVG={55}
          heightSVG={85}
          strokeDasharray={130}
          isStart={false}
          d={'M 50 80 H 15 Q 5 80 5 70 V 5'}
          strokeColor={'#05a'}
          delayMilis={9000}
        />
      </div>
      <div className={'absolute bottom-[2.9rem] right-[23.3rem]'}>
        <SvgAnimation
          widthSVG={55}
          heightSVG={85}
          strokeDasharray={130}
          isStart={false}
          d={'M 50 80 H 15 Q 5 80 5 70 V 5'}
          strokeColor={'#05a'}
          delayMilis={11000}
        />
      </div>
    </div>
  )
}
