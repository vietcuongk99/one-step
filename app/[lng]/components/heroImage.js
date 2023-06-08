import styles from '@/style/styles.module.scss'
import Image from "next/image";
export default function HeroImage() {
  return (
    <div className="max-w-2xl relative">
      <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
        <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
          <Image
            width={'800'} height={'800'}
            className={'block opacity-100 border-none m-0 p-0 max-w-full'}
            alt="" aria-hidden="true"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIzMCIgaGVpZ2h0PSIyMjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
          />
        </span>
        <Image
          width={'800'} height={'800'}
          alt="earth" srcSet="/images/uranus.png 1x"
          src="/images/uranus.png" decoding="async"
          data-nimg="intrinsic"
          className={`${styles['animate-earth']} transform rotate-6 absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full`}
        />
      </span>
      <div className={`${styles['animate-rocket']} absolute top-20 max-w-[200px] sm:max-w-[250px] xl:max-w-[300px] right-0`}>
        <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
          <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
            <Image
              width={'150'} height={'150'}
              className={'block opacity-100 border-none m-0 p-0 max-w-full'}
              alt="" aria-hidden="true"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDI0IiBoZWlnaHQ9IjQyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </span>
          <Image
            width={'150'} height={'150'}
            alt="astronaut"
            src="/images/astronaut.png"
            decoding="async" data-nimg="intrinsic"
            className={`absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full`}
            srcSet="/images/astronaut.png 1x, /images/astronaut.png 2x"
          />
        </span>
      </div>
    </div>
  )
}
