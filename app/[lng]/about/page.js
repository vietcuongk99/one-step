import styles from '@/style/styles.module.scss'
import Section from '../components/section'
import { useTranslation } from '../../i18n'
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/app/[lng]/components/heroImage";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'about')
  return { title: t('title') }
}
export default async function About({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'about')
  const feSkills = ["HTML", "CSS", "JavaScript", "React", "React Naive", "Vue", "Angular", "NextJs", "NuxtJs", "TypeScript", "Webpack", "Vite", "Bootstrap", "Ant design", "Tailwind", "..."]
  const beSkills = ["Java", "NodeJs", "Spring", "MySQL", "MongoDB", "Jenkins", "Kibana", "Grafana", "Elasticsearch", "Nghinx", "Kubernetes", "Docker", "Rancher", "Sonarqube", "Longhorn", "..."]
  const sectionOneTitle = () => {
    return t('about-us')
  }
  const sectionOneContent = () => {
    return (
      <>
        <div
          className={`${styles['sz-container']} pt-10 pb-6 sm:pb-10 flex flex-col md:flex-row items-center justify-between md:gap-x-10 xl:gap-x-28 overflow-hidden md:overflow-visible`}
        >
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center ">
              <p className="z-10 text-4xl xl:text-5xl xl:leading-[72px] uppercase font-bold">
                <span className={`${styles['text-text-highlight']}`}>{t('our-story')}</span>
              </p>
            </div>
            <div className={`${styles['description']} text-left`}>
              <p>{t('story-1')}</p>
              <p>{t('story-2')}</p>
              <p>{t('story-3')}</p>
            </div>
          </div>
          <div className={'relative w-full md:w-1/2 flex justify-center items-center'}>
            <HeroImage />
          </div>
        </div>
      </>
    )
  }
  // const sectionTwoTitle = () => {
  //   return t('our-values')
  // }
  // const sectionTwoSubtitle = () => {
  //   return t('our-values-subtitle')
  // }
  // const sectionTwoContent = () => {
  //   return (
  //     <div className={'grid grid-cols-1 lg:grid-cols-2 gap-x-28 2xl:gap-x-[294px] gap-y-10 md:gap-y-16 mt-6 md:mt-10'}>
  //       <div
  //         className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
  //         <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3'}
  //              style={{background: '#F27405'}}>
  //           <span>
  //             <Image
  //               width={20} height={20}
  //               className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
  //               alt="web" src="/images/icons/users-alt.png"
  //             />
  //           </span>
  //         </div>
  //         <p
  //           className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
  //           {t('values.people.title')}</p>
  //         <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>{t('values.people.content')}</p>
  //       </div>
  //       <div
  //         className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
  //         <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
  //              style={{background: '#F27405'}}>
  //           <span>
  //             <Image
  //               width={20} height={20}
  //               className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
  //               alt="web" src="/images/icons/happy.png"
  //             />
  //           </span>
  //         </div>
  //         <p className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
  //           {t('values.feeling.title')}
  //         </p>
  //         <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
  //           {t('values.feeling.content')}
  //         </p>
  //       </div>
  //       <div
  //         className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
  //         <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
  //              style={{background: '#F27405'}}>
  //           <span>
  //             <Image
  //               width={20} height={20}
  //               className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
  //               alt="web" src="/images/icons/code.png"
  //             />
  //           </span>
  //         </div>
  //         <p
  //           className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
  //           {t('values.detail.title')}
  //         </p>
  //         <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
  //           {t('values.detail.content')}
  //         </p>
  //       </div>
  //       <div
  //         className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
  //         <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
  //              style={{background: '#F27405'}}>
  //           <span>
  //             <Image
  //               width={20} height={20}
  //               className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
  //               alt="web" src="/images/icons/like.png"
  //             />
  //           </span>
  //         </div>
  //         <p
  //           className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
  //           {t('values.happy.title')}
  //         </p>
  //         <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
  //           {t('values.happy.content')}
  //         </p>
  //       </div>
  //     </div>
  //   )
  // }
  const sectionFourTitle = () => {
    return t('start')
  }
  const sectionFourSubtitle = () => {
    return (
      <>
        <Link href={`/${lng}/launch`} className={'w-full flex items-center justify-center'}>
          <button
            type="button" className={`${styles.btn} ${styles['gradient-border']} z-10 flex items-center relative group rounded-md overflow-hidden gradient-border bg-white mx-auto md:mx-0 w-full`}>
            <div className={`${styles['bg-btn-wink']} ${styles['transition-width']}`}></div>
            <div className="flex items-center px-4">
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full text-white'}>
              <Image
                width={20}
                height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'} alt="one-step-white" src="/images/icons/one-step-white.png"
              />
            </span>
              <div
                className={`${styles['text-wink-dark']} group-hover:text-white z-[1] pointer-events-none flex-1 flex items-center justify-center gap-x-2 text-center font-semibold transition-all duration-200`}>
                <span>{t('launch-your-product')}</span>
              </div>
            </div>
          </button>
        </Link>
        <div className={`${styles['animate-spinLeft']} absolute -top-80 max-w-[200px] sm:max-w-[250px] xl:max-w-[300px] z-10`}>
        </div>
      </>
    )
  }
  const sectionTwoTitle = () => {
    return (<><span className={`${styles['text-text-highlight']}`}>{t('services-title')}</span></>)
  }
  const sectionThreeTitle = () => {
    return (<><span className={`${styles['text-text-highlight']}`}>{t('skills-title')}</span></>)
  }
  const sectionTwoSubtitle = () => {
    return (<p>{t('services-subtitle')}</p>)
  }
  const sectionTwoContent = () => {
    return (
      <div className={'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-28 gap-y-10 md:gap-y-16 mt-6 md:mt-20'}>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/browser.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('web-dev')}</p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>{t('web-dev-content')}</p>
        </div>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/mobile-notch.png"
              />
            </span>
          </div>
          <p className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('mobile-dev')}
          </p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
            {t('mobile-dev-content')}
          </p>
        </div>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/palette.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('ux-ui-design')}
          </p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
            {t('design-content')}
          </p>
        </div>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/users-alt.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('staff-aug')}
          </p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
            {t('staff-aug-content')}
          </p>
        </div>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white text-2xl'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/global.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('business')}
          </p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left`}>
            {t('business-content')}
          </p>
        </div>
      </div>
    )
  }
  const sectionThreeContent = () => {
    return (
      <div className={'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-x-28 gap-y-10 md:gap-y-16 mt-6 md:mt-20'}>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/browser.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('fe-web-dev')}</p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left flex flex-wrap`}>
            {feSkills.map((item, index) => {
              return (
                <span key={index} className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 mb-2">{item}</span>
              )
            })}
          </p>
        </div>
        <div
          className={`${styles['shadow-card']} w-[240px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
          <div className={'icon w-16 h-16 rounded-full flex items-center justify-center mb-3'}
               style={{background: '#F27405'}}>
            <span>
              <Image
                width={20} height={20}
                className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="web" src="/images/icons/browser.png"
              />
            </span>
          </div>
          <p
            className={`group-hover:${styles['text-wink-dark']} title mb-4 md:mb-6 text-2xl md:text-[32px] md:leading-[48px] font-bold transition-all duration-300 text-center lg:text-left`}>
            {t('be-web-dev')}</p>
          <p className={`${styles['text-text-secondary']} content text-center lg:text-left flex flex-wrap`}>
            {beSkills.map((item, index) => {
              return (
                <span key={index} className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 mb-2">{item}</span>
              )
            })}
          </p>
        </div>
      </div>
    )
  }
  return (
    <>
      {/*<Section title={sectionOneTitle} subtitle={null} content={sectionOneContent} wrapperContainer={false}/>*/}
      {/*<Section title={sectionTwoTitle} subtitle={sectionTwoSubtitle} content={sectionTwoContent} wrapperContainer={true}/>*/}
      <Section title={sectionOneTitle} subtitle={null} content={sectionOneContent} wrapperContainer={false}/>
      <Section title={sectionTwoTitle} subtitle={sectionTwoSubtitle} content={sectionTwoContent} wrapperContainer={true}/>
      <Section title={sectionThreeTitle} subtitle={null} content={sectionThreeContent} wrapperContainer={true}/>
      <Section title={sectionFourTitle} subtitle={sectionFourSubtitle} content={null} wrapperContainer={true}/>
    </>
  )
}
