'use client'
import styles from '@/style/styles.module.scss'
import { useTranslation } from '@/app/i18n/client'
import SvgAnimation from "./SvgAnimation";
import GridAnimate from "./gridAnimate";
import {useRef} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import {SERVICES, TECHS} from "@/constants/constant";
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
    return onScreen && getTotalSectionOnScreen() === 1
  }

  const renderAnimationSection1 = (start) => {
    return (
      <GridAnimate
        items={SERVICES}
        itemShow={[
          {name: 'cart', position: 1, delayMilis: 500, scale: 1, timeOutPath: 20},
          {name: 'ldap', position: 2, delayMilis: 500, scale: 1, timeOutPath: 20},
          {name: 'payment', position: 3, delayMilis: 500, scale: 1, timeOutPath: 20},
          {name: 'ewallet', position: 7, delayMilis: 500, scale: 1, timeOutPath: 20},
          {name: 'collaborator', position: 8, delayMilis: 500, scale: 1, timeOutPath: 20},
          {name: 'chat', position: 9, delayMilis: 500, scale: 1, timeOutPath: 20}
        ]}
        isOnScreen={start}
        start={start}
        isDefaultChildren={false}
      />
    )
  }
  const renderAnimationSection2 = (start) => {
    return (
      <GridAnimate
        items={TECHS.LANGUAGE}
        itemShow={[
          {name: 'JavaScript', position: 1, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Java', position: 2, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Vue', position: 4, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'React', position: 7, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'NextJS', position: 9, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Nodejs', position: 10, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Spring', position: 12, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'mongoDB', position: 13, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Angular', position: 6, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'MySQL', position: 15, delayMilis: 500, scale: 0.75, timeOutPath: 20},
        ]}
        isOnScreen={start}
        start={start}
        isDefaultChildren={false}
      />
    )
  }
  const renderAnimationSection3 = (start) => {
    return (
      <GridAnimate
        items={TECHS.OPS}
        itemShow={[
          {name: 'Docker', position: 0, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'K8S', position: 3, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Nginx', position: 4, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Longhorn', position: 5, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Kibana', position: 11, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Rancher', position: 12, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Jenkins', position: 15, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Grafana', position: 13, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Sonarqube', position: 6, delayMilis: 500, scale: 0.75, timeOutPath: 20},
          {name: 'Elasticsearch', position: 8, delayMilis: 500, scale: 0.75, timeOutPath: 20},
        ]}
        isOnScreen={start}
        start={start}
        isDefaultChildren={false}
      />
    )
  }

  return (
    <>
      <div>
        <div style={{position: 'relative'}}>
          <div className={'grid gap-y-48'}>
            <div id={'row1'}>
              <div id={'column1'} className={'grid gap-x-32 grid-cols-1 2xl:grid-cols-2'}>
                <div className={'h-[500px]'}>
                  <div ref={refSection1} className={`${styles['text-text-highlight']} text-2xl uppercase font-bold`}>{t('business-title')}</div>
                  <div>{t('business-content')}</div>
                </div>
                <div className={'relative self-start hidden 2xl:block'}>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen1) ? 1 : 0}} className={'h-[1500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen1) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection1(showAnimation(isOnScreen1))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen2) ? 1 : 0}} className={'h-[1500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen2) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection2(showAnimation(isOnScreen2))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen3) ? 1 : 0}} className={'h-[1500px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen3) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection3(showAnimation(isOnScreen3))}
                    </div>
                  </div>
                </div>
              </div>
              <div id={'column2'} className={'grid gap-x-32 grid-cols-1 2xl:grid-cols-2'}>
                <div className={'h-[700px]'}>
                  <div ref={refSection2} className={`${styles['text-text-highlight']} text-2xl uppercase font-bold`}>{t('language-title')}</div>
                  <div>{t('language-content')}</div>
                </div>
                <div className={'relative self-start hidden 2xl:block'}>
                </div>
              </div>
              <div id={'column2'} className={'grid gap-x-32 grid-cols-1 2xl:grid-cols-2'}>
                <div className={'h-[300px] w-[400px]'}>
                  <span ref={refSection3} className={`${styles['text-text-highlight']} text-2xl uppercase font-bold`}>{t('config-title')}</span>
                  <div>{t('config-content')}</div>
                </div>
                <div className={'relative self-start hidden 2xl:block'}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        {/*<div className={'h-[2000px]'}>*/}
        {/*  12312313132*/}
        {/*</div>*/}
      </section>
    </>
  )
}
