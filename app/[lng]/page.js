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
import ScrollAnimate from "./components/Animation/scrollAnimate";
import StepAnimate from "@/app/[lng]/components/Animation/stepAnimate";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'home')
  return { title: t('title') }
}
export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'home')
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
          <div className={`${styles['sz-container']}`}>
            <ScrollAnimate lng={lng} />
          </div>
          {/*<HeroSectionBottom lng={lng} />*/}
        </div>
        <div className={'w-full mt-20 xl:mb-20'}>
          <StepAnimate lng={lng} start={true} />
        </div>
        <Section title={null} subtitle={null} content={sectionTwoContent} wrapperContainer={false}/>
        <Footer lng={lng}/>
      </div>
    </>
  )
}
