"use client"
import {ConfigProvider, Form, Modal} from "antd";
import styles from "@/style/styles.module.scss";
import Image from "next/image";
import {memo, useCallback, useEffect, useState} from "react";
import {BUDGET_LIST} from "@/constants/constant";
import { useTranslation } from '@/app/i18n/client'
export default function LaunchFormDetail({lng, currentStep, showResultForSubmit}) {
  const { t } = useTranslation(lng, 'launch')
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(false)
  const steps = BUDGET_LIST.slice(0).reverse()
  const customThemeForForm = {
    token: {
      fontSize: '100%',
      colorText: 'inherit',
      lineHeight: 'inherit'
    }
  }
  const onFinish = async (values) => {
    await submitForm(values)
  };
  const onFinishFailed = (errorInfo) => {};
  const submitForm = async (values) => {
    setIsDisabledSubmit(true)
    const {email, project, name, description} = {...values}
    const price = steps.filter(item => item.step === currentStep)[0].value
    const res = await fetch("https://server.softzone.vn/order-project", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, name, project, description, price
      }),
      method: "POST"
    })
    if (!res || !res.ok) {
      setIsDisabledSubmit(false)
      showResultForSubmit(false)
      return
    }
    const response = await res.json()
    if (response) {
      setTimeout(() => {
        setIsDisabledSubmit(false)
        showResultForSubmit(response.success)
      }, 1000)
    }
  }
  const FormContent = () => {
    return (
      <div className={'mt-0 w-full mx-auto max-w-md 2xl:max-w-[500px] p-5'}>
        <ConfigProvider
          theme={customThemeForForm}
        >
          <Form
            layout={'vertical'}
            name="launchForm"
            requiredMark={false}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className={'mb-10'}
              name="name"
              rules={[
                {
                  required: true,
                  message: <p className="text-red-600 text-xs mt-1">{t('name-plank-error')} 👀</p>,
                },
              ]}
            >
              <div>
                <p className="font-semibold mb-3">{t('name')}</p>
                <input
                  placeholder={`${t('name-placeholder')}`}
                  className="border px-4 py-2 rounded-md border-[#9CB0C6] w-full focus:ring-wink-light focus:outline-none focus:ring-2 focus:border-wink-light"
                />
              </div>
            </Form.Item>

            <Form.Item
              className={'mb-10'}
              name="email"
              rules={[
                {
                  required: true,
                  message: <p className="text-red-600 text-xs mt-1">{t('email-plank-error')} 📧</p>,
                },
                {
                  type: 'email',
                  message: <p className="text-red-600 text-xs mt-1">{t('email-valid-error')} 📧</p>,
                },
              ]}
            >
              <div>
                <p className="font-semibold mb-3">{t('email')}</p>
                <input
                  placeholder={`${t('email-placeholder')}`}
                  className="border px-4 py-2 rounded-md border-[#9CB0C6] w-full focus:ring-wink-light focus:outline-none focus:ring-2 focus:border-wink-light"
                />
              </div>
            </Form.Item>
            <Form.Item
              className={'mb-10'}
              name="project"
              rules={[
                {
                  required: true,
                  message: <p className="text-red-600 text-xs mt-1">{t('project-plank-error')} 👀</p>,
                },
              ]}
            >
              <div>
                <p className="font-semibold mb-3">{t('project')}</p>
                <input
                  placeholder={`${t('project-placeholder')}`}
                  className="border px-4 py-2 rounded-md border-[#9CB0C6] w-full focus:ring-wink-light focus:outline-none focus:ring-2 focus:border-wink-light"
                />
              </div>
            </Form.Item>
            <Form.Item
              className={'mb-10'}
              name="description"
              rules={[
                {
                  required: true,
                  message: <p className="text-red-600 text-xs">{t('idea-plank-error')} 💡</p>,
                },
              ]}
            >
              <div>
                <p className="font-semibold mb-3">{t('idea')}</p>
                <textarea
                  placeholder={`${t('idea-placeholder')}`}
                  rows={10}
                  className="border px-4 py-2 rounded-md border-[#9CB0C6] w-full focus:ring-wink-light focus:outline-none focus:ring-2 focus:border-wink-light"
                />
              </div>
            </Form.Item>

            <Form.Item
            >
              <div className={'flex items-center w-full justify-center mt-5'}>
                <button
                  disabled={isDisabledSubmit}
                  type="submit"
                  className={`${styles.btn} ${styles['gradient-border']} z-10 flex items-center relative group rounded-md overflow-hidden gradient-border bg-white mx-auto md:mx-0 w-full`}
                >
                  <div className={`${styles['bg-btn-wink']} ${styles['transition-width']}`}></div>
                  <div className="flex items-center px-4">
                    <span className={'box-border inline-block overflow-hidden opacity-100 border-none m-0 p-0 relative max-w-full'}>
                      {
                        isDisabledSubmit ? (
                          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg"
                               fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <Image
                            width={20} height={20}
                            className={'w-6 h-6 min-w-[24px] z-[1] max-w-full min-w-max max-h-full min-h-full'}
                            alt="one-step-white" src="/images/icons/one-step-white.png"
                          />
                        )
                      }
                    </span>
                    <div
                      className={`${styles['text-wink-dark']} group-hover:text-white z-[1] pointer-events-none flex-1 flex items-center justify-center gap-x-2 text-center font-semibold transition-all duration-200`}>
                      <span>{t('start')}</span></div>
                  </div>
                </button>
              </div>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    )
  }

  return (
    <FormContent />
  )
}
