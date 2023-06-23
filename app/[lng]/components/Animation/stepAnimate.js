"use client"
import styles from '@/style/styles.module.scss'
import SvgAnimation from "./SvgAnimation";
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import {useTranslation} from "@/app/i18n/client";
export default function StepAnimate({ lng, start = false, isOnScreen = true }) {
  const { t } = useTranslation(lng, 'home')
  const ref = useRef(null)
  const isStepOnScreen = useIntersection(ref, 0.1)

  return (
    <div ref={ref}>
      <div className={'w-full px-8 lg:px-16'}>
        <div className={'grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 gap-y-0'}>
          <div className={`${styles['step-wrapper']} flex-col`}>
            <div className={`${styles['step-num']} lg:!hidden`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-wrapper']}`}>
                <b>1</b>
              </div>
            </div>
            <div className={`${styles['step-content']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['text-text-highlight']} text-2xl mb-2 font-bold text-center`}>{t('step-animate.discover-title')}</div>
              <div className={`${styles['text-text-secondary']} text-xl`}>{t('step-animate.discover-content')}</div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} flex-col`}>
            <div className={`${styles['step-num']} lg:!hidden`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-wrapper']}`}>
                <b>2</b>
              </div>
            </div>
            <div className={`${styles['step-content']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['text-text-highlight']} text-2xl mb-2 font-bold text-center`}>{t('step-animate.document-title')}</div>
              <div className={`${styles['text-text-secondary']} text-xl`}>{t('step-animate.document-content')}</div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} flex-col`}>
            <div className={`${styles['step-num']} lg:!hidden`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-wrapper']}`}>
                <b>3</b>
              </div>
            </div>
            <div className={`${styles['step-content']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['text-text-highlight']} text-2xl mb-2 font-bold text-center`}>{t('step-animate.develop-title')}</div>
              <div className={`${styles['text-text-secondary']} text-xl`}>{t('step-animate.develop-content')}</div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} flex-col`}>
            <div className={`${styles['step-num']} lg:!hidden`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-wrapper']}`}>
                <b>4</b>
              </div>
            </div>
            <div className={`${styles['step-content']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['text-text-highlight']} text-2xl mb-2 font-bold text-center`}>{t('step-animate.deploy-title')}</div>
              <div className={`${styles['text-text-secondary']} text-xl`}>{t('step-animate.deploy-content')}</div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} flex-col`}>
            <div className={`${styles['step-num']} lg:!hidden`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-wrapper']}`}>
                <b>5</b>
              </div>
            </div>
            <div className={`${styles['step-content']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['text-text-highlight']} text-2xl mb-2 font-bold text-center`}>{t('step-animate.driver-title')}</div>
              <div className={`${styles['text-text-secondary']} text-xl`}>{t('step-animate.driver-content')}</div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} !hidden lg:!flex`}>
            <div className={`${styles['step-num']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-line-wrapper']} opacity-0`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
              <div className={`${styles['num-wrapper']}`}>
                <b>1</b>
              </div>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} !hidden lg:!flex`}>
            <div className={`${styles['step-num']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
              <div className={`${styles['num-wrapper']}`}>
                <b>2</b>
              </div>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} !hidden lg:!flex`}>
            <div className={`${styles['step-num']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
              <div className={`${styles['num-wrapper']}`}>
                <b>3</b>
              </div>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} !hidden lg:!flex`}>
            <div className={`${styles['step-num']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
              <div className={`${styles['num-wrapper']}`}>
                <b>4</b>
              </div>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
            </div>
          </div>
          <div className={`${styles['step-wrapper']} !hidden lg:!flex`}>
            <div className={`${styles['step-num']}`} style={{transform: isStepOnScreen ? 'scale(1)' : 'scale(0)', transition: 'all 0.5s ease'}}>
              <div className={`${styles['num-line-wrapper']}`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
              <div className={`${styles['num-wrapper']}`}>
                <b>5</b>
              </div>
              <div className={`${styles['num-line-wrapper']} opacity-0`}>
                <div className={`${styles['num-line']}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
