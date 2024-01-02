import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from '../pages/includes/header'
// const Header = dynamic(() => import('../pages/includes/header'),{
//   ssr: true,
// })
import Footer from '../components/Footer'

// const Footer = dynamic(() => import('../components/Footer'),{
//   ssr: true,
// })

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 10000)
  const [auth, setAuth] = useState(false)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

     <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
