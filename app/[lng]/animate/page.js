import styles from '@/style/styles.module.scss'
import Section from '../components/section'
import LaunchForm from "../components/launchForm";
import { useTranslation } from '../../i18n'
import CurvePathAnimation from "../components/CurvePathAnimation";
import HeroAnimation from "../components/heroAnimation";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'launch')
  return { title: t('title') }
}
export default async function Animate({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'launch')
  const title = () => {
    return (
      <>
        <span className={`${styles['text-text-highlight']}`}>{t('start-title')}</span><br/>
        <span>{t('start-title-2')}</span>
      </>
    )
  }
  const content = () => {
    return (
      <>
        <LaunchForm lng={lng} />
      </>
    )
  }
  return (
    <>
      {/*<div className={'text-center m-8'}>*/}
      {/*  <CurvePathAnimation*/}
      {/*    widthSVG={200}*/}
      {/*    heightSVG={200}*/}
      {/*    defaultValue={130}*/}
      {/*    timeOutMilis={50}*/}
      {/*    delayMilis={0}*/}
      {/*    d={'M54.46875,86.375 L21,86.375 Q1,86.375 1,66.375 L1,1'}*/}
      {/*    strokeColor={'#05a'}*/}
      {/*  />*/}
      {/*  <CurvePathAnimation*/}
      {/*    widthSVG={200}*/}
      {/*    heightSVG={200}*/}
      {/*    defaultValue={130}*/}
      {/*    timeOutMilis={50}*/}
      {/*    delayMilis={6000}*/}
      {/*    strokeColor={'#05a'}*/}
      {/*    d={'M 54.4688 86.375 L 54 13 Q 54 1 41 1 L 1 1'}*/}
      {/*  />*/}
      {/*  <CurvePathAnimation*/}
      {/*    widthSVG={200}*/}
      {/*    heightSVG={200}*/}
      {/*    defaultValue={130}*/}
      {/*    timeOutMilis={50}*/}
      {/*    delayMilis={11000}*/}
      {/*    d={'M 95 86 L 21 86 Q 1 86 1 67 L 1 52'}*/}
      {/*    strokeColor={'#05a'}*/}
      {/*  />*/}
      {/*  <CurvePathAnimation*/}
      {/*    widthSVG={200}*/}
      {/*    heightSVG={200}*/}
      {/*    defaultValue={130}*/}
      {/*    timeOutMilis={50}*/}
      {/*    delayMilis={16000}*/}
      {/*    d={'M 54 26 L 54 13 Q 54 1 42 1 L 1 1'}*/}
      {/*    strokeColor={'#05a'}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={'w-full flex items-center justify-center mt-52'}>
        <HeroAnimation />
      </div>
      {/*<Section title={title} content={content} wrapperContainer={false}/>*/}
    </>
  )
}
