import styles from '@/style/styles.module.scss'
import Section from '../components/section'
import LaunchForm from "../components/launchForm";
import { useTranslation } from '../../i18n'
import SvgAnimation from "../components/SvgAnimation";
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
      <div className={'w-full flex items-center justify-center mt-52'}>
        <HeroAnimation />
      </div>
    </>
  )
}
