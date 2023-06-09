"use client"
import styles from "@/style/styles.module.scss";
import Image from "next/image";
import LocaleSwitcher from '../localeSwitcher'
import {useTranslation} from '@/app/i18n/client'
import Link from "next/link";
import {DrawerContext} from "@/context/drawerProvider";
import {useContext, useEffect, useRef} from "react";
import {useRouter} from "next/navigation";

export default function Header({lng, path}) {
  const {t} = useTranslation(lng)
  const triggerRef = useRef(null);
  const {isOpen, setOpenDrawer} = useContext(DrawerContext)
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setOpenDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDrawer, triggerRef]);

  const showDrawer = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      document.body.removeAttribute('style')
    }, 0)
    setOpenDrawer(true)
  }
  const onClose = (e) => {
    e.stopPropagation();
    setOpenDrawer(false)
  }
  const Bars = () => {
    return (
      <div className={'block lg:hidden'}>
        <button type="button" onClick={showDrawer} className={'py-2'}>
          <div className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent"><span
            className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><span
              aria-hidden="true"
              className="-translate-y-1.5 block absolute h-[2px] w-5 bg-current transform transition duration-500 ease-in-out bg-black"></span><span
              aria-hidden="true"
              className="block absolute h-[2px] w-5 bg-current transform transition duration-500 ease-in-out bg-black"></span><span
              aria-hidden="true"
              className="translate-y-1.5 block absolute h-[2px] w-5 bg-current transform transition duration-500 ease-in-out bg-black"></span>
            </div>
          </div>
        </button>
      </div>
    )
  }
  const HeaderDrawer = () => {
    return (
      <div
        ref={triggerRef}
        style={{boxShadow: "0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)", borderRadius: 7}}
        className={`absolute ${isOpen ? 'block' : 'hidden'} top-0 right-0 px-5 pt-2 bg-white lg:hidden transition-all duration-200 z-50 m-4 ${styles['sidebar-custom-w']}`}
      >
        <div className={`relative flex items-center`}>
          <div className="text-2xl text-col font-bold" style={{color: "#5d69e3"}}>Softzone</div>
          <div className={'text-gray-500 w-10 h-10 relative focus:outline-none bg-white ml-auto cursor-pointer'}
               onClick={onClose}>
            <div className={'block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'}><span
              aria-hidden="true"
              className={'rotate-45 block absolute h-[2px] w-5 bg-current transform transition duration-500 ease-in-out bg-black'}></span><span
              aria-hidden="true"
              className={'rotate-45 block absolute h-[2px] w-5 bg-current transform transition duration-500 ease-in-out bg-black'}></span><span
              aria-hidden="true"
              className={'-rotate-45 block absolute h-[2px] w-5 bg-current transform  transition duration-500 ease-in-out bg-black'}></span>
            </div>
          </div>
        </div>
        <ul className={`flex flex-col gap-9 font-medium mt-2 text-xl ${styles['main-nav']}`}>
          <li style={{color: "#3f4b66"}} className={`${styles['text-nav']}`} onClick={() => {
            router.push(`/${lng}/about`);
            setOpenDrawer(false);
          }}>{t('about-us')}</li>
        </ul>
        <div className="text-center" style={{background: "#f6f9fb", padding: 10}}>
          <button onClick={() => {
            router.push(`/${lng}/launch`);
            setOpenDrawer(false);
          }} style={{borderRadius: 20}} className={`${styles['custom-btn']} ${styles['btn-primary']}`}>
            <span className="text-lg">{t('launch-your-product')} </span>
            <span className={"ml-1"}>🚀</span>
          </button>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className={`fixed z-50 w-full ${styles['glass-header']} ${styles['sz-background']}`}>
        <div className={`${styles['sz-container']} ${styles['sz-header']} py-0 lg:py-2`}>
          <Link
            className={'mx-3 md:mx-0 w-8 h-8 lg:w-14 lg:h-14 cursor-pointer flex items-center justify-center'}
            href={`/${lng}`}
          >
            <span className={'max-w-full w-full max-h-full h-full'}>
              <Image
                className={'max-w-full min-w-max max-h-full min-h-full w-8 h-8 lg:w-14 lg:h-14'}
                src={'/images/icons/one-step.png'}
                alt={'one-step'}
                width={60}
                height={60}
                placeholder="blur"
                blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAWElEQVR42u3PQQEAQAQAsPO4JCpKLoEGCtgaLLp+vkNCWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeDNc/V2FEytvawAAAABJRU5ErkJggg=='}
              />
            </span>
          </Link>
          <div className={'flex justify-center items-center'}>
            <LocaleSwitcher lng={lng} path={path}/>
            <div className={'hidden lg:flex items-center justify-between space-x-14 font-medium'}>
              <div className={'w-24'}>
                <Link className={"text-nav"} href={`/${lng}/about`}>
                  <span className={`${styles['text-secondary-light']}`}>{t('about-us')}</span>
                </Link>
              </div>
              <div>
                <Link href={`/${lng}/launch`}>
                  <button className={`${styles.btn} ${styles['btn-primary']} px-5 h-10 !w-64`}>
                    <span>{t('launch-your-product')} </span>
                    <span className={"ml-1"}>🚀</span>
                  </button>
                </Link>
              </div>
            </div>
            <Bars/>
          </div>
        </div>
      </div>
      <HeaderDrawer/>
    </>
  )
}
