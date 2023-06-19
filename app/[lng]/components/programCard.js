import styles from "@/style/styles.module.scss";
import Image from "next/image";
export default function ProgramCard({name, avatarUrl, width, height}) {
  return (
    <div className={`${styles['program-card']} scale-75`}>
      <div className="flex items-center justify-center flex-col gap-x-4">
        <div className="overflow-hidden">
          <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full max-h-full'}>
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full max-h-full'}>
              <Image
                width={width}
                height={height}
                className={'block opacity-100 border-none m-0 p-0 max-w-full max-h-full'}
                alt="" aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIzMCIgaGVpZ2h0PSIyMjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
              />
            </span>
            <Image
              width={width}
              height={height}
              alt="avatar"
              src={avatarUrl}
              decoding="async"
              data-nimg="intrinsic"
              className={`absolute inset-0 box-border p-0 border-none m-auto block`}
            />
          </span>
        </div>
        <div>
          <p className={`${styles['text-text-secondary']} mt-4`}>{name}</p>
        </div>
      </div>
    </div>
  )
}
