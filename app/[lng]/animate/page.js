import styles from '@/style/styles.module.scss'
import Section from '../components/section'
import LaunchForm from "../components/launchForm";
import { useTranslation } from '../../i18n'
import ScrollAnimate from "../components/Animation/scrollAnimate";
import HeroAnimate from "../components/Animation/heroAnimate";
import StepAnimate from "@/app/[lng]/components/Animation/stepAnimate";
import GridAnimate from "@/app/[lng]/components/Animation/gridAnimateV2";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'launch')
  return { title: 'Animation' }
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
      {/*<ScrollAnimate lng={lng}/>*/}
      {/*<StepAnimate start={true} />*/}
      <GridAnimate />
    </>
  )
}
