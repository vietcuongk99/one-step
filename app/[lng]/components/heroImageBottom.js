import styles from '@/style/styles.module.scss'
import Image from "next/image"
export default function HeroImageBottom() {
  return (
    <div className="relative w-1/2 hidden md:flex justify-end items-center">
      <div className="relative">
        {/*<div className={`${styles['animate-earth']}`}>*/}
        <div>
          <span style={{ display: "block" }} className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative'}>
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative'}>
              <Image
                width={'600'}
                height={'600'}
                className={'block opacity-100 border-none m-0 p-0'}
                alt="" aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </span>
            <Image
              width={'600'}
              height={'600'}
              alt="verified" srcSet="/images/astronaut_flag.png 1x, /images/astronaut_flag.png 2x"
              src="/images/uranus.png" decoding="async"
              data-nimg="intrinsic"
              className={`absolute inset-0 box-border p-0 border-none m-auto block`}
            />
          </span>
        </div>
        <div className={`absolute top-24 right-0`}>
          <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-80'}>
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-80'}>
              <Image
                width={'150'}
                height={'150'}
                className={'block opacity-100 border-none m-0 p-0 max-w-full'}
                alt="" aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYwIiBoZWlnaHQ9IjQ2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </span>
            <Image
              alt="thumbup" srcSet="/images/thumbs-up.png 1x, /images/thumbs-up.png 2x"
              width={'150'}
              height={'150'}
              src="/images/astronaut_black.png" decoding="async"
              data-nimg="intrinsic"
              className={`absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full min-h-full max-h-full`}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
