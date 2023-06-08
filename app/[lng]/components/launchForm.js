"use client"
import {ConfigProvider, Form, Modal} from "antd";
import styles from "@/style/styles.module.scss";
import Image from "next/image";
import {memo, useCallback, useEffect, useState} from "react";
import {BUDGET_LIST} from "@/constants/constant";
import { useTranslation } from '@/app/i18n/client'
import LaunchBudget from "@/app/[lng]/components/launchBudget";
import LaunchFormDetail from "@/app/[lng]/components/launchFormDetail";
export default function LaunchForm({lng}) {
  const { t } = useTranslation(lng, 'launch')
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customThemeForModal = {
    token: {
      fontSize: '100%',
      colorText: 'inherit',
      lineHeight: 'inherit',
    }
  }
  useEffect(() => {
    // console.log(currentStep)
  }, [currentStep])
  const setPopover = useCallback((step) => {
    setCurrentStep(step)
  }, [currentStep])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const showResultForSubmit = (isSuccess) => {
    setIsSuccessSubmit(isSuccess)
    showModal()
  };
  const ModalSubmitResult = () => {
    return (
      <ConfigProvider theme={customThemeForModal}>
        <Modal
          width={400}
          title={null}
          closable={false}
          footer={null}
          open={isModalOpen}
        >
          <div className={'flex items-center justify-center flex-col'}>
            <Image
              width={100} height={100}
              className={'w-28 h-28 min-w-[60px] min-h-[60px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
              alt="img result" src={isSuccessSubmit ? '/images/icons/astronaut_success.png' : '/images/icons/astronaut_fail.png'}
            />
            <div className={'p-4'}>
              {isSuccessSubmit ? t('success-submit') : t('fail-submit')}
            </div>
            <button onClick={closeModal}>
              <Image
                width={40} height={40}
                className={'w-8 h-8 min-w-[24px] min-h-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                alt="close modal" src="/images/icons/close.png"
              />
            </button>
          </div>
        </Modal>
      </ConfigProvider>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-1 w-full my-16 gap-y-10 2xl:w-1/3">
        <div className={'col-span-1 order-2 xl:order-1 flex flex-col gap-y-9 w-full mx-auto max-w-md 2xl:max-w-[500px]'}>
          <p className="font-semibold mb-14">{t('your-budget')}</p>
          <LaunchBudget lng={lng} currentStep={currentStep} setPopover={setPopover} />
          <LaunchFormDetail lng={lng} currentStep={currentStep} showResultForSubmit={showResultForSubmit} />
        </div>
      </div>
      <ModalSubmitResult />
    </>
  )
}
