import styles from "@/style/styles.module.scss";
import Image from "next/image";
export default function FooterBase({ t, lng }) {
  return (
    <div className={`${styles['sz-background']}`}>
    <div className={`${styles['sz-container']} flex flex-col divide-y divide-[#008DFF10]`}>
      <div className="flex flex-col xl:flex-row justify-between py-12 gap-10">
        <div className="flex flex-col items-center xl:items-start gap-6">
          <div
            className="w-[60px] h-[60px] min-w-[60px] md:w-[60px] md:h-[60px] md:min-w-[60px] flex items-center justify-center">
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
        <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
          <Image
            width={60} height={60}
            className={'block opacity-100 border-none m-0 p-0 max-w-full'}
            alt="" aria-hidden="true"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIzMCIgaGVpZ2h0PSIyMjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
          />
        </span>
        <Image
          width={60} height={60}
          alt="logo" srcSet="/images/icons/one-step.png 1x"
          src="/images/icons/one-step.png"
          className={`absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full`}/>
      </span>
          </div>
          <div className="space-y-2 mt-3">
            <div className="flex gap-2">
              <div className={`${styles['text-wink-dark']} w-6 min-w-[24px] h-6 flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 33 39" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M16.5 0C25.598 0 33 7.458 33 16.626C33 27.896 20.088 39 16.5 39C12.912 39 0 27.896 0 16.626C0 7.458 7.402 0 16.5 0ZM16.5 3C9.056 3 3 9.114 3 16.626C3 26.184 14.248 35.496 16.5 35.992C18.752 35.494 30 26.182 30 16.626C30 9.114 23.944 3 16.5 3ZM16.502 10C20.086 10 23.002 12.916 23.002 16.502C23.002 20.086 20.086 23 16.502 23C12.918 23 10.002 20.086 10.002 16.502C10.002 12.916 12.918 10 16.502 10ZM16.502 13C14.572 13 13.002 14.57 13.002 16.502C13.002 18.432 14.572 20 16.502 20C18.432 20 20.002 18.432 20.002 16.502C20.002 14.57 18.432 13 16.502 13Z"
                        fill="currentColor"></path>
                </svg>
              </div>
              <a href="https://goo.gl/maps/14zUhssj3RYu6xJTA" target="_blank"
                 className={`max-w-sm ${styles['text-sub-secondary-light']} duration-150`} rel="noreferrer">
                {t('location')}
              </a></div>
            <div className="flex gap-2">
              <div className={`${styles['text-wink-dark']} w-6 min-w-[24px] h-6 flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 43 39" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M31.318 0C37.978 0 43 5.434 43 12.64V26.376C43 30.064 41.696 33.396 39.326 35.76C37.2 37.878 34.442 39 31.35 39H11.644C8.558 39 5.802 37.88 3.674 35.76C1.304 33.396 0 30.064 0 26.376V12.64C0 5.434 5.022 0 11.682 0H31.318ZM31.318 3H11.682C6.652 3 3 7.054 3 12.64V26.376C3 29.262 3.992 31.84 5.792 33.634C7.344 35.184 9.37 36 11.65 36H31.318C31.322 35.996 31.338 36 31.35 36C33.632 36 35.656 35.184 37.208 33.634C39.01 31.84 40 29.262 40 26.376V12.64C40 7.054 36.348 3 31.318 3ZM34.47 12.2576C34.992 12.8996 34.894 13.8436 34.252 14.3676L25.364 21.5916C24.24 22.4836 22.896 22.9296 21.554 22.9296C20.216 22.9296 18.882 22.4876 17.766 21.6036L8.796 14.3716C8.15 13.8516 8.05 12.9056 8.568 12.2616C9.09 11.6196 10.034 11.5176 10.678 12.0356L19.64 19.2596C20.766 20.1516 22.352 20.1516 23.486 19.2516L32.358 12.0396C33.002 11.5136 33.946 11.6136 34.47 12.2576Z"
                        fill="currentColor"></path>
                </svg>
              </div>
              <a href="mailto:softzone@gmail.com" target="_blank"
                 className={`${styles['text-text-highlight']} max-w-sm duration-150`}
                 rel="noreferrer">softzone@gmail.com</a></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 justify-items-center 2xl:gap-x-24">
          <div><p className={`font-semibold uppercase mb-8 ${styles['text-text-highlight']}`}>{t('company')}</p>
            <ul className="flex flex-col gap-y-2">
              <li className={`${styles['text-sub-secondary-light']} hover:${styles['text-text-link']} transition-all duration-300`}>
                <a href="/about">{t('about-us')}</a>
              </li>
              {/*<li className={`${styles['text-sub-secondary-light']} hover:${styles['text-text-link']} transition-all duration-300`}>*/}
              {/*  <a href="/career">Career @Softzone</a>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div><p className={`font-semibold uppercase mb-8 ${styles['text-text-highlight']}`}>{t('help')}</p>
            <ul className="flex flex-col gap-y-2">
              <li className={`${styles['text-sub-secondary-light']} hover:text-text-link transition-all duration-300`}>
                <a href="/contact">{t('contact-us')}</a>
              </li>
              <li className={`${styles['text-sub-secondary-light']} hover:text-text-link transition-all duration-300`}><a
                href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div><p className={`font-semibold uppercase mb-8 ${styles['text-text-highlight']}`}>{t('legal')}</p>
            <ul className="flex flex-col gap-y-2">
              <li className={`${styles['text-sub-secondary-light']} hover:${styles['text-text-link']} transition-all duration-300`}><a
                href="/terms">{t('terms')}</a></li>
              <li className={`${styles['text-sub-secondary-light']} hover:${styles['text-text-link']} transition-all duration-300`}><a
                href="/privacy">{t('privacy')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center py-6">
        <div className={`max-w-sm ${styles['text-sub-secondary-light']} flex-1 flex items-center gap-x-2`}><p>© {new Date().getFullYear()} Softzone</p>
        </div>
      </div>
    </div>
    </div>
  )
}
