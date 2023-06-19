import styles from '@/style/styles.module.scss'
import Image from "next/image"
import HeroImageBottom from './heroImageBottom'
import { useTranslation } from '@/app/i18n'
import Link from "next/link";
import HeroAnimation from "../components/heroAnimation";
export default async function HeroSectionBottom({lng}) {
  const { t } = await useTranslation(lng, 'common')
  return (
    <div className={`py-20`}>
    <div
      className={`${styles['sz-container']} flex flex-col xl:flex-row items-center justify-between gap-y-10 md:gap-x-10 xl:gap-x-28`}>
      <div className="flex-1 mb-8 md:mb-0">
        <div className="flex items-center">
          <p className="z-10 text-4xl xl:text-5xl xl:leading-[72px] uppercase font-bold">
            {<><span>{t('start-title')} </span><br/><span className={`${styles['text-text-highlight']}`}>{t('start-title-2')}?</span></>}
          </p>
        </div>
        <div className={`${styles['description']} mb-12 text-left`}>
          <p className={`${styles['text-text-secondary']}`}>{t('start-subtitle')}</p>
        </div>
        <Link href={`/${lng}/launch`} className={'w-full flex items-center'}>
        <button
          type="button" className={`${styles.btn} ${styles['gradient-border']} z-10 flex items-center relative group rounded-md overflow-hidden gradient-border bg-white mx-auto md:mx-0 w-full`}>
          <div className={`${styles['bg-btn-wink']} ${styles['transition-width']}`}></div>
          <div className="flex items-center px-4">
            <span
              className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full text-white'}>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="one-step-white" src="/images/icons/one-step-white.png"
              />
            </span>
            <div
              className={`${styles['text-wink-dark']} group-hover:text-white z-[1] pointer-events-none flex-1 flex items-center justify-center gap-x-2 text-center font-semibold transition-all duration-200`}>
              <span>{t('launch-your-product')}</span></div>
          </div>
        </button>
        </Link>
      </div>
      <HeroImageBottom />
    </div>
    </div>
  )
}
