"use client"
import styles from '@/style/styles.module.scss'
import SvgAnimation from "./SvgAnimation";
import {useEffect, useRef, useState} from "react";
import {useIntersection} from "@/hooks/useIntersection";
import {useTranslation} from "@/app/i18n/client";
export default function HeroAnimate({ lng, start = false, isOnScreen = true }) {
  const { t } = useTranslation(lng, 'home')

  return (
    <div className={`${styles['animation-render']} relative w-[800px] h-[500px]`}>
      <div className={'flex justify-center items-center'}>
        <div className={`inline-block opacity-100 border-none m-0 p-0 absolute top-[2rem] 2xl:top-[5rem]`}>
          <SvgAnimation
            d={'M 20 50 L 525 50 V 15 V 15 Q 525 5 535 5 H 730 Q 740 5 740 15 V 395 Q 740 405 730 405 V 450 H 20 Q 10 450 10 440 V 60 Q 10 50 20 50 M 730 405 L 535 405 Q 525 405 525 395 V 50'}
            widthSVG={750}
            heightSVG={460}
            strokeDasharray={2500}
            timeOutContent={250}
            timeOutPath={10}
            isStart={false}
            strokeColor={'#05a'}
            delayMilis={500}
            triggerReplay={false}
            start={start}
            isOnScreen={isOnScreen}
            childrenContent={() => {
              return (
                <div className={`${styles['hero-animate']} relative w-[800px] h-[500px] overflow-hidden`}>
                  <div className={` ${styles['hero-web']}`}>
                    <div className={`${styles['web-header']}`}>
                      <div className={`${styles['logo']}`}>Techs</div>
                      <div className={`${styles['search']}`}>
                        <div className={'ml-3'}>
                          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
                          </svg>
                        </div>
                        <div className={'ml-3'}><span>{t('hero-animate.search')}</span></div>
                      </div>
                    </div>
                    <div className={`${styles['web-section']}`}>
                      <div className={`${styles['left']}`}>
                        <div className={'p-1'}>
                          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px">
                            <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"/>
                          </svg>
                        </div>
                      </div>
                      <div className={`${styles['right']} p-3`}>
                        <div className={'font-bold'}>{t('hero-animate.total')}</div><hr />
                        <div className={'grid grid-cols-4 mb-5'}>
                          <div className={''}>
                            <div>{t('hero-animate.user')}</div>
                            <div>1.000</div>
                          </div>
                          <div className={''}>
                            <div>{t('hero-animate.balance')}</div>
                            <div>$2.000.000</div>
                          </div>
                          <div className={''}>
                            <div>{t('hero-animate.account')}</div>
                            <div>1.000</div>
                          </div>
                          <div className={''}>
                            <div>{t('hero-animate.active')}</div>
                            <div>1.000</div>
                          </div>
                        </div>
                        <div className={'font-bold'}>{t('hero-animate.report')}</div>
                        <div className={'grid grid-cols-2 mb-3'}>
                          <div className={'border border-solid p-3 border-r-0'}>
                            <div><span>{t('hero-animate.balance')}</span><span className={'text-green-600 ml-1'}>+46.5%</span></div>
                            <div className={'flex justify-between'}>
                              <div className={'text-green-600'}>{t('hero-animate.price1')}</div>
                              <div className={'text-gray-500'}>{t('hero-animate.price2')}</div>
                            </div>
                            <div>
                              <svg width="300px" height="100px">
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%"   stopColor={'#7fcbc3'}/>
                                    <stop offset="35%" stopColor={'#7fcbc3'}/>
                                    <stop offset="100%"   stopColor={'#71bad9'}/>
                                  </linearGradient>
                                </defs>
                                <defs>
                                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%"   stopColor={'#d5d4e3'}/>
                                    <stop offset="35%" stopColor={'#b0b0c6'}/>
                                    <stop offset="100%"   stopColor={'#a7b3b5'}/>
                                  </linearGradient>
                                </defs>
                                <path
                                  fill="transparent"
                                  stroke={'url(#gradient)'}
                                  d="M 10 60 Q 20 54 68 53 Q 81 45 97 40 Q 107 35 115 34 C 130 32.6667 145 31.3333 201 27 H 259"/>
                                <path
                                  fill="transparent"
                                  stroke={'url(#gradient2)'}
                                  d="M 15 40 Q 25 35 34 41 Q 44 45 57 46 Q 64 34 74 27 C 90 26 101 24 114 24 L 209 25 C 225 28 241 31 257 34"/>
                              </svg>
                              <hr />
                              <div className={'flex justify-between'}>
                                <div>{t('hero-animate.fromDate')}</div>
                                <div>{t('hero-animate.toDate')}</div>
                              </div>
                            </div>
                          </div>
                          <div className={'border border-solid p-3'}>
                            <div><span>{t('hero-animate.user')}</span><span className={'text-green-600 ml-1'}>+50.5%</span></div>
                            <div className={'flex justify-between'}>
                              <div className={'text-green-600'}>3.100</div>
                              <div className={'text-gray-500'}>2.680</div>
                            </div>
                            <div>
                              <svg width="300px" height="100px">
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%"   stopColor={'#7fcbc3'}/>
                                    <stop offset="35%" stopColor={'#7fcbc3'}/>
                                    <stop offset="100%"   stopColor={'#71bad9'}/>
                                  </linearGradient>
                                </defs>
                                <defs>
                                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%"   stopColor={'#d5d4e3'}/>
                                    <stop offset="35%" stopColor={'#b0b0c6'}/>
                                    <stop offset="100%"   stopColor={'#a7b3b5'}/>
                                  </linearGradient>
                                </defs>
                                <path
                                  fill="transparent"
                                  stroke={'url(#gradient)'}
                                  d="M 10 60 Q 20 54 68 53 Q 81 45 97 40 Q 107 35 115 34 C 130 32.6667 145 31.3333 201 27 H 259"/>
                                <path
                                  fill="transparent"
                                  stroke={'url(#gradient2)'}
                                  d="M 15 40 Q 25 35 34 41 Q 44 45 57 46 Q 64 34 74 27 C 90 26 101 24 114 24 L 209 25 C 225 28 241 31 257 34"/>
                              </svg>
                              <hr />
                              <div className={'flex justify-between'}>
                                <div>{t('hero-animate.fromDate')}</div>
                                <div>{t('hero-animate.toDate')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles['hero-mobile']}`}>
                    <div className={`${styles['mobile-logo']} flex justify-center`}>
                      <div>Techs</div>
                    </div>
                    <hr />
                    <div className={`${styles['form-wrapper']}`}>
                      <label>{t('hero-animate.name')}</label>
                      <div className={`${styles['form-input']}`}></div>
                    </div>
                    <div className={`${styles['form-wrapper']}`}>
                      <label>{t('hero-animate.email')}</label>
                      <div className={`${styles['form-input']}`}></div>
                    </div>
                    <div className={`${styles['form-wrapper']}`}>
                      <label>{t('hero-animate.card-info')}</label>
                      <div className={`${styles['form-input']}`}>{t('hero-animate.number')}</div>
                    </div>
                    <div className={`${styles['form-wrapper']}`}>
                      <label>{t('hero-animate.country')}</label>
                      <div className={`${styles['form-input']}`}></div>
                    </div>
                    <div className={`${styles['form-wrapper']}`}>
                      <div className={`${styles['pay-btn']}`}>{t('hero-animate.pay')}</div>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}
