import styles from "@/style/styles.module.scss";
import Image from "next/image";
export default function CardReview({name, subtitle, content, avatarUrl}) {
  return (
    <div className={`${styles['testimonial-card']}`}>
      <div className="flex items-center gap-x-4 mb-7">
        <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-full overflow-hidden bg-blue-400">
          <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
            <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
              <Image
                width={64}
                height={64}
                className={'block opacity-100 border-none m-0 p-0 max-w-full'}
                alt="" aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIzMCIgaGVpZ2h0PSIyMjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
              />
            </span>
            <Image
              width={64}
              height={64}
              alt="avatar"
              src={avatarUrl}
              decoding="async"
              data-nimg="intrinsic"
              className={`absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full`}
            />
          </span>
        </div>
        <div>
          <p className="mb-2 font-medium">{name}</p>
          <p className={`${styles['text-text-secondary']} italic text-sm`}>{subtitle}</p>
        </div>
      </div>
      <p className={`${styles['text-text-secondary']}`}>{content}</p>
    </div>
  )
}
