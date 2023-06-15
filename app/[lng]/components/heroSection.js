import styles from '@/style/styles.module.scss'
import Image from "next/image";
import HeroImage from './heroImage'
import { useTranslation } from '@/app/i18n'
import Link from "next/link";
import HeroAnimation from "./heroAnimation";
export default async function HeroSection({lng}) {
  const { t } = await useTranslation(lng)
  return (
    <div className={`${styles['sz-background']} pt-10 pb-6`}>
      <div
        className={`${styles['sz-container']} pt-10 pb-6 sm:pb-28 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-x-10 xl:space-y-0`}>
        <div className="flex flex-col items-center xl:items-start">
          <h1 className={`${styles['home-title']} ${styles['text-secondary-light']}`}>
            <div>{t('your-idea')}</div>
            <div className="flex items-center text-center">
              <p className={`relative ${styles['text-text-highlight']}`}>
                <span>{t('our-solution')}</span>
              </p>
            </div>
          </h1>
          <p className={`mt-16 mb-9 max-w-3xl text-center xl:text-left ${styles['text-sub-secondary-light']}`}>
            {t('heroSection.line1')}<br/>
            {t('heroSection.line2')}<br/>
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
        <HeroAnimation
          showTech={[
            {name: 'JavaScript', position: 1, delayMilis: 3500},
            {name: 'Java', position: 2, delayMilis: 3500},
            {name: 'Spring Boot', position: 15, delayMilis: 3500},
            {name: 'React', position: 16, delayMilis: 3500}
          ]}
          start={true}
        />
      </div>
    </div>
  )
}
