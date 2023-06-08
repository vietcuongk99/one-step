import styles from '@/style/styles.module.scss'
export default function Section({title, subtitle, content, wrapperContainer}) {

  return (
    <>
      <div className={`${wrapperContainer ? styles['sz-container'] : ''} pt-20 pb-6 sm:pb-28 flex flex-col items-center justify-center md:gap-x-10 xl:gap-x-28`}>
        <div className={`${styles['sz-container']}`}>
          <div className="flex items-center justify-center text-center">
            <div className="z-10 text-4xl xl:text-5xl xl:leading-[72px] uppercase font-bold">
              {title ? title() : <></>}
            </div>
          </div>
          <div className={`${styles['description']} z-0 text-center flex flex-col items-center justify-center relative`}>
            {subtitle ? subtitle() : <></>}
          </div>
        </div>
        {content ? content() : <></>}
      </div>
    </>
  )
}
