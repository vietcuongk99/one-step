import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import Header from './components/Header/client'
import { Footer } from './components/Footer/client'
import HeroSection from "@/app/[lng]/components/heroSection";
import Marquee from "@/app/[lng]/components/marquee";
import Section from "@/app/[lng]/components/section";
import HeroSectionBottom from "@/app/[lng]/components/heroSectionBottom";
import ProgramCard from "@/app/[lng]/components/programCard";
import styles from '@/style/styles.module.scss'
import Image from 'next/image'
import {TECHS} from "@/constants/constant";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'home')
  return { title: t('title') }
}

const feSkills = ["HTML", "CSS", "JavaScript", "React", "React Naive", "Vue", "Angular", "NextJs", "NuxtJs", "TypeScript", "Webpack", "Vite", "Bootstrap", "Ant design", "Tailwind", "..."]
const beSkills = ["Java", "NodeJs", "Spring Boot", "MySQL", "MongoDB", "Jenkins", "Kibana", "Grafana", "Elasticsearch", "Nghinx", "Kubernetes", "Docker", "Rancher", "Sonarqube", "Longhorn", "..."]

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'home')
  const sectionOneTitle = () => {
    return (<><span className={`${styles['text-text-highlight']}`}>{t('services-title')}</span></>)
  }
  const sectionThreeTitle = () => {
    return (<><span className={`${styles['text-text-highlight']}`}>{t('skills-title')}</span></>)
  }
  const sectionOneSubtitle = () => {
    return (<p>{t('services-subtitle')}</p>)
  }
  const sectionOneContent = () => {
    return (
      <div className={'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-28 gap-y-10 md:gap-y-16 mt-6 md:mt-20'}>
        <div
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
          className={`${styles['shadow-card']} w-[300px] sm:w-[400px] md:min-h-[290px] p-6 rounded-2xl group transition-all duration-300 flex flex-col items-center lg:items-start`}>
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
  const sectionTwoContent = () => {
    return (
      <>
        <Marquee wrapperClass={''} isReverse={false} content={() => {
          return TECHS.LANGUAGE.map((item, index) => (
              <ProgramCard
                key={index}
                name={item.name}
                width={item.width}
                height={item.height}
                avatarUrl={item.avatarUrl}
              />
            )
          )
        }}/>
        <Marquee wrapperClass={''} isReverse={true} content={() => {
          return TECHS.OPS.map((item, index) => (
              <ProgramCard
                key={index}
                name={item.name}
                width={item.width}
                height={item.height}
                avatarUrl={item.avatarUrl}
              />
            )
          )
        }}/>
      </>
    )
  }

  return (
    <>
      <div className={'md:h-screen flex flex-col'}>
        <Header lng={lng} path={'/'}/>
        <div className={'mt-10 lg:mt-14'}>
          <HeroSection lng={lng} />
          <Section title={sectionOneTitle} subtitle={sectionOneSubtitle} content={sectionOneContent} wrapperContainer={true}/>
          <Section title={sectionThreeTitle} content={sectionThreeContent} wrapperContainer={true}/>
          <Section title={null} subtitle={null} content={sectionTwoContent} wrapperContainer={false}/>
          <HeroSectionBottom lng={lng} />
        </div>
        <Footer lng={lng}/>
      </div>
    </>
  )
}
