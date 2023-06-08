import styles from '@/style/styles.module.scss'
export default function Marquee({content, wrapperClass, isReverse}) {
  return (
      <div className={`${styles['marquee-container']} flex items-center justify-between h-full ${wrapperClass}`}>
        <div className={`${styles.marquee} ${styles[isReverse ? 'softzone-marquee-reverse' : 'softzone-marquee']}`}>
          {content()}
        </div>
        <div className={`${styles.marquee} ${styles[isReverse ? 'softzone-marquee-reverse' : 'softzone-marquee']}`}>
          {content()}
        </div>
      </div>
  )
}
