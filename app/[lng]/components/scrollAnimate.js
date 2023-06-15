'use client'
import styles from '@/style/styles.module.scss'
import Section from '../components/section'
import { useTranslation } from '../../i18n/client'
import SvgAnimation from "../components/SvgAnimation";
import HeroAnimation from "../components/heroAnimation";
import {useRef} from "react";
import {useIntersection} from "@/hooks/useIntersection";
export default function ScrollAnimate({ lng }) {
  const { t } = useTranslation(lng, 'home')

  const refSection1 = useRef(null)
  const refSection2 = useRef(null)
  const refSection3 = useRef(null)
  const refSection4 = useRef(null)
  const refSection5 = useRef(null)

  const isOnScreen1 = useIntersection(refSection1, 0.1)
  const isOnScreen2 = useIntersection(refSection2, 0.1)
  const isOnScreen3 = useIntersection(refSection3, 0.1)
  const isOnScreen4 = useIntersection(refSection4, 0.1)
  const isOnScreen5 = useIntersection(refSection5, 0.1)

  const isOnScreen = [isOnScreen1, isOnScreen2, isOnScreen3, isOnScreen4, isOnScreen5]

  const getTotalSectionOnScreen = () => {
    return isOnScreen.filter(item => item).length
  }
  const showAnimation = (onScreen) => {
    console.log(onScreen)
    return onScreen && getTotalSectionOnScreen() === 1
  }
  const showAnimationSection = (onScreen) => {
    const start = onScreen
    if (isOnScreen[0] && showAnimation(onScreen)) return renderAnimationSection1(start)
    if (isOnScreen[1] && showAnimation(onScreen)) return renderAnimationSection2(start)
    if (isOnScreen[2] && showAnimation(onScreen)) return renderAnimationSection3(start)
    if (isOnScreen[3] && showAnimation(onScreen)) return renderAnimationSection4(start)
    if (isOnScreen[4] && showAnimation(onScreen)) return renderAnimationSection5(start)
  }

  const renderAnimationSection1 = (start) => {
    return (
      <HeroAnimation
        name={'1'}
        showTech={[
          {name: 'JavaScript', position: 1, delayMilis: 3500},
          {name: 'Java', position: 2, delayMilis: 3500},
          {name: 'Spring Boot', position: 15, delayMilis: 3500},
          {name: 'React', position: 16, delayMilis: 3500}
        ]}
        start={start}
      />
    )
  }
  const renderAnimationSection2 = (start) => {
    return (
      <HeroAnimation
        name={'1'}
        showTech={[
          {name: 'NextJS', position: 1, delayMilis: 3500},
          {name: 'Java', position: 2, delayMilis: 3500},
          {name: 'Spring Boot', position: 15, delayMilis: 3500},
          {name: 'React', position: 16, delayMilis: 3500}
        ]}
        start={start}
      />
    )
  }
  const renderAnimationSection3 = (start) => {
    return (
      <HeroAnimation
        name={'1'}
        showTech={[
          {name: 'mongoDB', position: 1, delayMilis: 3500},
          {name: 'Java', position: 2, delayMilis: 3500},
          {name: 'Spring Boot', position: 15, delayMilis: 3500},
          {name: 'React', position: 16, delayMilis: 3500}
        ]}
        start={start}
      />
    )
  }
  const renderAnimationSection4 = (start) => {
    return (
      <HeroAnimation
        name={'1'}
        showTech={[
          {name: 'Vue', position: 1, delayMilis: 3500},
          {name: 'Java', position: 2, delayMilis: 3500},
          {name: 'Spring Boot', position: 15, delayMilis: 3500},
          {name: 'React', position: 16, delayMilis: 3500}
        ]}
        start={start}
      />
    )
  }
  const renderAnimationSection5 = (start) => {
    return (
      <HeroAnimation
        name={'1'}
        showTech={[
          {name: 'NextJS', position: 1, delayMilis: 3500},
          {name: 'Java', position: 2, delayMilis: 3500},
          {name: 'Spring Boot', position: 15, delayMilis: 3500},
          {name: 'React', position: 16, delayMilis: 3500}
        ]}
        start={start}
      />
    )
  }

  return (
    <>
      <section>
        <div style={{position: 'relative'}}>
          <div className={'grid gap-y-48 items-center'}>
            <div id={'row1'}>
              <div id={'column1'} className={'grid gap-x-32 grid-cols-2'}>
                <div className={'flex items-center justify-center h-[700px]'}>
                  <span ref={refSection1}>Section 1</span>
                </div>
                <div className={'relative self-start'}>
                  <div style={{position: 'absolute', top: 0, left: 0}} className={'h-[3500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen1) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection1(showAnimation(isOnScreen1))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0}} className={'h-[3500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen2) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection2(showAnimation(isOnScreen2))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0}} className={'h-[3500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen3) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection3(showAnimation(isOnScreen3))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0}} className={'h-[3500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen4) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection4(showAnimation(isOnScreen4))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0}} className={'h-[3500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen5) ? 'opacity-1' : 'opacity-0'}`}>
                      {renderAnimationSection5(showAnimation(isOnScreen5))}
                    </div>
                  </div>
                </div>
              </div>
              <div id={'column2'} className={'grid gap-x-32 grid-cols-2'}>
                <div className={'flex items-center justify-center h-[700px]'}>
                  <span ref={refSection2}>Section 2</span>
                </div>
                <div className={'relative self-start'}>
                </div>
              </div>
              <div id={'column2'} className={'grid gap-x-32 grid-cols-2'}>
                <div className={'flex items-center justify-center h-[700px]'}>
                  <span ref={refSection3}>Section 3</span>
                </div>
                <div className={'relative self-start'}>
                </div>
              </div>
              <div id={'column4'} className={'grid gap-x-32 grid-cols-2'}>
                <div className={'flex items-center justify-center h-[700px]'}>
                  <span ref={refSection4}>Section 4</span>
                </div>
                <div className={'relative self-start'}>
                </div>
              </div>
              <div id={'column5'} className={'grid gap-x-32 grid-cols-2'}>
                <div className={'flex items-center justify-center h-[700px]'}>
                  <span ref={refSection5}>Section 5</span>
                </div>
                <div className={'relative self-start'}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={'h-[2000px]'}>
          12312313132
        </div>
      </section>
    </>
  )
}
