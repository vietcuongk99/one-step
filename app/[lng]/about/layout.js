import Header from "@/app/[lng]/components/Header/client";
import {Footer} from "@/app/[lng]/components/Footer/client";
export default function AboutLayout({children, params: {lng}}) {
  return (
    <div className={'md:h-screen flex flex-col'}>
      <Header lng={lng} path={'about'}/>
      <div className={'mt-10 lg:mt-14'}>
        {children}
      </div>
      <Footer lng={lng}/>
    </div>
  )
}
