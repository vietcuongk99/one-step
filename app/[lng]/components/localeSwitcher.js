"use client"
import Link from "next/link";
import {languages} from "@/app/i18n/settings";
import {LANGUAGE_LABEL} from "@/constants/constant";
import {Popover} from "antd";
import styles from "@/style/styles.module.scss";
export default function LocaleSwitcher ({lng, path}) {
  const navigate = (path) => {
    window.open(window.location.origin + '/' + path, '_self')
  }
  const content = () => {
    return (
      <div className={'flex flex-col'}>
        {languages.map((item, index) => {
          return (
            <div className={'max-w-full max-h-full p-2 font-medium cursor-pointer'} key={index} onClick={() => navigate(`${item}/${path}`)}>
              <span className={item === lng ? `${styles['text-text-highlight']}` : ``}>{LANGUAGE_LABEL[item]}</span>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className={'flex items-center lg:mr-12 mr-8'}>
      {/*{languages.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <Link className={'max-w-full max-h-full'} key={index} href={`${item}/${path}`}>*/}
      {/*      <Image style={{filter: !(lng === item) ? 'opacity(0.5)' : 'none'}} className={'p-3 w-full h-full'} width={18} height={18} alt={'locale'} src={`/images/icons/${item}.png`} />*/}
      {/*    </Link>*/}
      {/*  )*/}
      {/*})}*/}
      <Popover title={null} trigger="click" content={content}>
        <button>
          <span className={`${styles['text-secondary-light']} font-medium`}>{LANGUAGE_LABEL[lng]}</span>
        </button>
      </Popover>
    </div>
  )
}
