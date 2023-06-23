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
        lng={lng}
        items={SERVICES}
        itemShow={[
          {name: 'ecommerce', isTranslated: true, position: 1, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'ldap', isTranslated: true, position: 2, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'payment', isTranslated: true, position: 4, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'ewallet', isTranslated: true, position: 14, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'collaborator', isTranslated: true, position: 16, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'chat', isTranslated: true, position: 17, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25}
        ]}
        isOnScreen={start}
        start={start}
        isDefaultChildren={true}
      />
    )
  }
  const renderAnimationSection2 = (start) => {
    return (
      <GridAnimate
        lng={lng}
        items={TECHS.LANGUAGE}
        itemShow={[
          {name: 'JavaScript', position: 2, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Java', position: 3, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Vue', position: 5, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'React', position: 8, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'NextJS', position: 10, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Nodejs', position: 11, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Spring', position: 13, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'mongoDB', position: 15, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Angular', position: 7, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'MySQL', position: 16, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
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
        lng={lng}
        items={TECHS.OPS}
        itemShow={[
          {name: 'Docker', position: 1, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'K8S', position: 4, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Nginx', position: 5, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Longhorn', position: 11, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Kibana', position: 10, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Rancher', position: 8, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Jenkins', position: 16, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Grafana', position: 15, delayMilis: 500, scaleFrom: 1, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Sonarqube', position: 2, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
          {name: 'Elasticsearch', position: 9, delayMilis: 500, scaleFrom: 0.75, timeOutPath: 20, scaleTo: 1.25},
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
          <div>
            <div id={'row1'}>
              <div className={'grid gap-x-32 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-2'}>
                <div className={'flex xl:justify-center items-center xl:h-[700px] col-span-1 2xl:col-auto'}>
                  <div className={'w-auto 2xl:w-[30rem] p-12'}>
                    <div ref={refSection1} className={`${styles['text-text-highlight']} text-4xl uppercase font-bold mb-4`}>{t('business-title')}</div>
                    <div className={`${styles['text-text-secondary']} uppercase text-2xl font-bold mb-8`}>{t('business-subtitle')}</div>
                    <div className={'text-xl'}>{t('business-content')}</div>
                  </div>
                </div>
                <div className={'relative self-start hidden xl:block col-span-2 2xl:col-auto'}>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen1) ? 1 : 0}} className={'h-[2000px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen1) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection1(showAnimation(isOnScreen1))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen2) ? 1 : 0}} className={'h-[2000px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen2) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection2(showAnimation(isOnScreen2))}
                    </div>
                  </div>
                  <div style={{position: 'absolute', top: 0, left: 0, zIndex: showAnimation(isOnScreen3) ? 1 : 0}} className={'h-[2000px]'}>
                    <div style={{position: 'sticky', top: `calc(50% - 200px)`, transition: 'opacity 0.5s ease'}} className={`${showAnimation(isOnScreen3) ? 'opacity-100' : 'opacity-0'}`}>
                      {renderAnimationSection3(showAnimation(isOnScreen3))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={'grid gap-x-32 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-2'}>
                <div className={'flex xl:justify-center items-center xl:h-[700px] col-span-1 2xl:col-auto'}>
                  <div className={'w-auto 2xl:w-[30rem] p-12'}>
                    <div ref={refSection2} className={`${styles['text-text-highlight']} text-4xl uppercase font-bold mb-4`}>{t('language-title')}</div>
                    <div className={`${styles['text-text-secondary']} uppercase text-2xl font-bold mb-8`}>{t('language-subtitle')}</div>
                    <div className={'text-xl'}>{t('language-content')}</div>
                  </div>
                </div>
                <div className={'relative self-start hidden xl:block col-span-2 2xl:col-auto'}>
                </div>
              </div>
              <div className={'grid gap-x-32 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-2'}>
                <div className={'flex xl:justify-center items-center xl:h-[700px] col-span-1 2xl:col-auto'}>
                  <div className={'w-auto 2xl:w-[30rem] p-12'}>
                    <div ref={refSection3} className={`${styles['text-text-highlight']} text-4xl uppercase font-bold mb-4`}>{t('config-title')}</div>
                    <div className={`${styles['text-text-secondary']} uppercase text-2xl font-bold mb-8`}>{t('config-subtitle')}</div>
                    <div className={'text-xl'}>{t('config-content')}</div>
                  </div>
                </div>
                <div className={'relative self-start hidden xl:block col-span-2 2xl:col-auto'}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      </section>
    </>
  )
}
