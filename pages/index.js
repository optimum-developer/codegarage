import dynamic from 'next/dynamic'
import Image from 'next/image'
// import Main from './main'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'


 import Main from './main'
// const Main = dynamic(() => import('./main'), {
//   ssr: true,
// })

import FeatureList from '../components/FeatureList'
// const FeatureList = dynamic(() => import('../components/FeatureList'), {
//   ssr: true,
// })
import Layouts from './layouts'
// const Layouts = dynamic(() => import('./layouts'), {
//   ssr: true,
// })
import Access from './access'
// const Access = dynamic(() => import('./access'), {
//   ssr: true,
// })
import Design from './design'
// const Design = dynamic(() => import('./design'), {
//   ssr: true,
// })
import Industries from './industries'
// const Industries = dynamic(() => import('./industries'), {
//   ssr: true,
// })
import DevOps from './services/devops'
// const Devops = dynamic(() => import('../components/DevOpSectionStatic'), {
//   ssr: true,
// })
import AIsection from '../components/Ai_Solutions'
// const AIsection = dynamic(() => import('../components/Ai_Solutions'), {
//   ssr: true,
// })




export default function Home({ data, caseData }) {
  const Router = useRouter()
  const [show, SetShow] = useState(true)


  useEffect(() => {

    // }
  }, [])
  console.log('chatwoot-page')
  return (
    <>
      <div className="page">
        <a
          href="https://api.whatsapp.com/send?phone=17606839821"
          className="whatsapp-btn-outer"
          title="Contact Us on whatsapp"
        >
          <Image
            className="whatsapp-btn"
            src="/images/WhatsApp.webp"
            alt="3D Whatsapp Icon"
            width={50}
            height={50}
          />
        </a>
   
        <div className="main_top">
        <Main />
        <FeatureList />
        <AIsection />
        <Access />
        <Layouts />
        <Design />
        <Industries />
       
      </div>
      </div>
    </>
  )
}


