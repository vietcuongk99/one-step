import styles from '@/style/styles.module.scss'
import Image from "next/image";
import HeroImage from './heroImage'
import { useTranslation } from '@/app/i18n'
import Link from "next/link";
import GridAnimate from "./Animation/gridAnimate";
import HeroAnimate from "@/app/[lng]/components/Animation/heroAnimate";
export default async function HeroSection({lng}) {
  const { t } = await useTranslation(lng)
  return (
    <div className={`${styles['sz-background']} px-5 py-10 2xl:py-16 2xl:px-10`}>
      <div
        className={`${styles['sz-container']} pt-10 pb-6 sm:pb-28 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-x-10 xl:space-y-0`}>
        <div className="flex flex-col items-center xl:items-start">
          <h1 className={`${styles['home-title']} ${styles['text-secondary-light']}`}>
            <div className={'text-center md:text-left'}>{t('your-idea')}</div>
            <div className={`text-center md:text-left ${styles['text-text-highlight']}`}>{t('our-solution')}</div>
          </h1>
          <p className={`text-xl mt-16 mb-9 max-w-3xl text-center xl:text-left ${styles['text-sub-secondary-light']}`}>
            {t('heroSection.line1')}<br/>
            {t('heroSection.line2')}<br/>
            {t('heroSection.line3')}<br/>
          </p>
          <Link href={`/${lng}/launch`} className={'w-full flex items-center justify-center xl:justify-normal'}>
            <button className={`${styles.btn} ${styles['gradient-border']} z-10 flex items-center relative group rounded-md overflow-hidden gradient-border bg-white mx-auto md:mx-0 w-full`}>
              <div className={`${styles['bg-btn-wink']} ${styles['transition-width']}`}></div>
              <div className="flex items-center px-4">
            <span
              className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="one-step-white" src="/images/icons/one-step-white.png"
              />
            </span>
                <div
                  className={`${styles['text-wink-dark']} group-hover:text-white z-[1] pointer-events-none flex-1 flex items-center justify-center gap-x-2 text-center font-semibold transition-all duration-200`}>
                  <span>{t('launch-your-product')}</span>
                </div>
              </div>
            </button>
          </Link>
        </div>
        {/*<HeroImage />*/}
        <div className={'hidden md:block'}>
          {/*<HeroAnimation*/}
          {/*  showTech={[*/}
          {/*    {name: 'JavaScript', position: 1, delayMilis: 1000, scale: 0.75},*/}
          {/*    {name: 'Java', position: 2, delayMilis: 1000, scale: 0.75},*/}
          {/*    {name: 'Spring', position: 15, delayMilis: 1000, scale: 0.75},*/}
          {/*    {name: 'React', position: 16, delayMilis: 1000, scale: 0.75}*/}
          {/*  ]}*/}
          {/*  start={true}*/}
          {/*/>*/}
          <HeroAnimate start={true} />
        </div>
      </div>
    </div>
  )
}
