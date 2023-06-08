"use client"
import styles from "@/style/styles.module.scss";
import {BUDGET_LIST} from "@/constants/constant";
import { useTranslation } from '@/app/i18n/client'
import Image from "next/image";
export default function LaunchBudget ({lng, currentStep, setPopover}) {
  const { t } = useTranslation(lng, 'launch')
  const steps = BUDGET_LIST
  const getCurrentLocate = () => {
    return ((currentStep) * (100 / (steps.length - 1)))
  }
  const BudgetSelect = () => {
    return (
      <div className="px-10 md:px-0">
        <div className="relative ml-1 w-[calc(100%-8px)] cursor-pointer flex py-2 rounded-sm select-none box-border h-2">
          <div
            style={{width: `${getCurrentLocate()}%`}}
            className={`${styles['bg-wink-light']} absolute rounded-full select-none box-border h-2 top-[-2px] z-[11]`}
          >
          </div>
          <div className="absolute bg-[#1994F81A] rounded-md select-none box-border w-full top-[-2px] h-2 z-10"></div>
          <div className="absolute z-[12] w-full">
            {
              steps.map((item, index) => {
                return (
                  <div key={item.title}>
                    <div
                      onClick={() => setPopover(item.step)}
                      style={{
                        left: `calc(${(100 / (steps.length - 1)) * item.step}%)`,
                        filter: !(currentStep >= item.step) ? 'opacity(0.5)' : 'none',
                        transform: 'translate(-50%, -50%)'
                      }}
                      className={`${currentStep >= index ? styles['bg-wink-light'] : ''} absolute top-[-5px] md:top-[-6px] w-4 h-4 rounded-full box-border bg-gray-400 transition transform duration-200 flex justify-center`}
                    >
                      <p className={`${currentStep === item.step ? styles['text-text-link'] : ''} text-sm md:text-base font-medium top-8 absolute`}>
                        {lng === 'vi' ? item.transTitle : item.title}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button
            type="button"
            className="absolute left-2"
            style={{
              left: `calc(${getCurrentLocate()}%)`,
              borderRadius: '50%',
              zIndex: '20',
              transform: 'translate(-50%, -50%)'
          }}
          >
            <div
              className={`relative block content-none w-12 h-12 rounded-full select-none cursor-pointer`}>
              <div
                className={`${styles['animate-rocket']} ${styles['text-wink-dark']} absolute left-5 md:left-5 -top-5 md:-top-5 text-center text-sm w-full h-full`}>
                <Image
                  width={'50'} height={'50'}
                  alt="astronaut"
                  src="/images/astronaut.png"
                  decoding="async" data-nimg="intrinsic"
                  className={`absolute inset-0 box-border p-0 border-none m-auto block w-full h-full w-8 h-8 lg:w-full lg:h-full`}
                  srcSet="/images/astronaut.png 1x, /images/astronaut.png 2x"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={'mb-16'}>
      <BudgetSelect />
    </div>
  )
}
