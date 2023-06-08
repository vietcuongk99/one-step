import styles from '@/style/styles.module.scss'
import { useTranslation } from '@/app/i18n'

export default async function Step ({lng}) {
  const { t } = await useTranslation(lng)
  return (
    <div className={'grid grid-cols-1 xl:grid-cols-4 gap-y-16'}>
      <div className={`${styles['softzone-step']} text-center flex flex-col items-center max-w-[440px] md:pt-10 md:pb-5 group`}>
        <div className="relative w-full"><p
          className={`${styles['softzone-step-num']} text-[#F2B705] false text-[80px] leading-[80px] md:text-[144px] md:leading-[144px] font-bold transition-all duration-300`}>01</p>
          <div className="hidden xl:block">
            <div className="absolute w-full h-full flex items-center justify-center top-0">
              <div
                className={`${styles['bg-wink-dark']} w-6 h-6 min-w-[24px] border-4 border-[#F2B705] false xl:group-hover:border-blue-100 rounded-full transition-all duration-300`}>
              </div>
            </div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 left-1/2`}></div>
          </div>
        </div>
        <p
          className={`${styles['softzone-step-title']} font-bold text-xl md:text-[32px] md:leading-[48px] mt-8 mb-3 md:h-24 false transition-all duration-300`}>
          {t('steps.step1.title')}
        </p><p className={`${styles['text-text-secondary']} px-9 text-sm`}>{t('steps.step1.detail')}</p></div>
      <div className={`${styles['softzone-step']} text-center flex flex-col items-center max-w-[440px] md:pt-10 md:pb-5 group`}>
        <div className="relative w-full"><p
          className={`${styles['softzone-step-num']} text-[#F2B705] false text-[80px] leading-[80px] md:text-[144px] md:leading-[144px] font-bold transition-all duration-300`}>02</p>
          <div className="hidden xl:block">
            <div className="absolute w-full h-full flex items-center justify-center top-0">
              <div
                className={`${styles['bg-wink-dark']} w-6 h-6 min-w-[24px] border-4 border-[#F2B705] false xl:group-hover:border-blue-100 rounded-full transition-all duration-300`}
               ></div>
            </div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 left-1/2`}></div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 right-1/2`}></div>
          </div>
        </div>
        <p
          className={`${styles['softzone-step-title']} font-bold text-xl md:text-[32px] md:leading-[48px] mt-8 mb-3 md:h-24 false transition-all duration-300`}>
          {t('steps.step2.title')}
        </p><p className={`${styles['text-text-secondary']} px-9 text-sm`}>{t('steps.step2.detail')}</p></div>
      <div className={`${styles['softzone-step']} text-center flex flex-col items-center max-w-[440px] md:pt-10 md:pb-5 group`}>
        <div className="relative w-full"><p
          className={`${styles['softzone-step-num']} text-[#F2B705] false text-[80px] leading-[80px] md:text-[144px] md:leading-[144px] font-bold transition-all duration-300`}>03</p>
          <div className="hidden xl:block">
            <div className="absolute w-full h-full flex items-center justify-center top-0">
              <div
                className={`${styles['bg-wink-dark']} w-6 h-6 min-w-[24px] border-4 border-[#F2B705] false xl:group-hover:border-blue-100 rounded-full transition-all duration-300`}
               ></div>
            </div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 left-1/2`}></div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 right-1/2`}></div>
          </div>
        </div>
        <p
          className={`${styles['softzone-step-title']} font-bold text-xl md:text-[32px] md:leading-[48px] mt-8 mb-3 md:h-24 false transition-all duration-300`}>
          {t('steps.step3.title')}
        </p><p className={`${styles['text-text-secondary']} px-9 text-sm`}>{t('steps.step3.detail')}</p></div>
      <div className={`${styles['softzone-step']} text-center flex flex-col items-center max-w-[440px] md:pt-10 md:pb-5 group`}>
        <div className="relative w-full"><p
          className={`${styles['softzone-step-num']} text-[#F2B705] false text-[80px] leading-[80px] md:text-[144px] md:leading-[144px] font-bold transition-all duration-300`}>04</p>
          <div className="hidden xl:block">
            <div className="absolute w-full h-full flex items-center justify-center top-0">
              <div
                className={`${styles['bg-wink-dark']} w-6 h-6 min-w-[24px] border-4 border-[#F2B705] false xl:group-hover:border-blue-100 rounded-full transition-all duration-300`}
               ></div>
            </div>
            <div className={`${styles['bg-wink-dark']} absolute w-full h-px top-1/2 right-1/2`}></div>
          </div>
        </div>
        <p
          className={`${styles['softzone-step-title']} font-bold text-xl md:text-[32px] md:leading-[48px] mt-8 mb-3 md:h-24 false transition-all duration-300`}>
          {t('steps.step4.title')}
        </p><p className={`${styles['text-text-secondary']} px-9 text-sm`}>{t('steps.step4.detail')}</p></div>
    </div>
  )
}
