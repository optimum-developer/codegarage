import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/case-page.module.css'


const Header = () => {
  const [headerSearchBar, setHeaderSearchBar] = useState(false)
  const [sideBarHandler, setSideBarHandler] = useState(false)
  const [autoplay1, setAutoplay1] = useState(true)
  const [autoplay2, setAutoplay2] = useState(true)
  const [autoplay3, setAutoplay3] = useState(true)
  let header = useRef(null)

  const [careerLink, setCareerLink] = useState(false)
  const [aboutUsLink, setAboutUsLink] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuVisibleService, setMenuVisibleService] = useState(false)

  const router = useRouter()
  const currentPath = router.pathname
  const headerSearch = () => {
    const searchBarShowHide = headerSearchBar ? false : true
    setHeaderSearchBar(searchBarShowHide)
  }

  const handleSidebar = (e) => {
    sideBarHandler ? setSideBarHandler(false) : setSideBarHandler(true)
    setMenuVisible(false)
    setMenuVisibleService(false)

    header.parentElement.style.overflowY = 'unset'
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
    setMenuVisibleService(false)
  }

  const handleMouseEnter = () => {
    setMenuVisible(true)
  }

  const handleMouseLeave = () => {
    setMenuVisible(false)
  }

  const toggleMenuService = () => {
    setMenuVisibleService(!menuVisibleService)
    setMenuVisible(false)
  }

  const handleMouseEnterService = () => {
    setMenuVisibleService(true)
  }

  const handleMouseLeaveService = () => {
    setMenuVisibleService(false)
  }


  const [sticky, setSticky] = useState('')
  const [isActive, setActive] = useState('')
  useEffect(() => {
    setCareerLink(router.pathname == '/careers')
    setAboutUsLink(router.pathname == '/about-us')

    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = () => {
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 250 ? 'is-sticky' : ''
    setSticky(stickyClass)
    if (scrollTop > 80) setActive('js-header-white')
    else setActive('')

  }

  const classes = `header-section is-sticky`
  const headerBg = `header js-header ${isActive}`
  const servicesSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay1,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }

  const technologiesSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay2,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }

  const portfolioSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: autoplay3,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
  }

  return (
    <>
      <header className={classes}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.96, maximum-scale=2.0"
          />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" sizes="180x180" href="/logo/cgt_new_favicon.webp" />
          <link
            rel="icon"
            type="image.webp"
            sizes="32x32"
            href="/logo/cgt_new_favicon.webp"
          />
          <link
            rel="icon"
            type="image.webp"
            sizes="16x16"
            href="/logo/cgt_new_favicon.webp"
          />
          <link
            rel="mask-icon"
            href="img/safari-pinned-tab.webp"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        />
        <div
          ref={(headerRef) => {
            header = headerRef
          }}
          className={headerBg}
          id="header"
        >
          <div className="header__center center">
            <button
              onClick={(e) => handleSidebar(e)}
              className={
                sideBarHandler
                  ? 'header__burger js-header-burger active'
                  : 'header__burger js-header-burger'
              }
            >
              <span></span>
            </button>
            <Link href="/">
              <div className="cursor_pointer header__logo">
                <div className="header__pic">
                  <Image
                    src="/logo/cgt_new_logo_alt.webp"
                    alt="Code Garage Tech - Logo"
                    width={210}
                    height={39}
                    priority={true}
                  />
                </div>
              </div>
            </Link>
            <div
              className={
                sideBarHandler
                  ? 'header__wrap js-header-wrap visible'
                  : 'header__wrap js-header-wrap'
              }
            >
              <nav className="header__nav">
                <div
                  className={`header__item service-menu-header-item`}
                  onMouseEnter={handleMouseEnterService}
                  onMouseLeave={handleMouseLeaveService}
                >
                  <div
                    className={`btn-outline-danger cursor_pointer header__head2 service-menu-head nav-css ${
                      menuVisibleService ? 'service-underline' : ''
                    }`}
                    onClick={toggleMenuService}
                  >
                    Services
                    {menuVisibleService ? (
                      <svg
                        className="iconup icon-arrow-down"
                        aria-labelledby="arrow-down-icon"
                      >
                        <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    ) : (
                      <svg
                        className="icon icon-arrow-down"
                        aria-labelledby="arrow-down-icon"
                      >
                        <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    )}
                  </div>

                  <div
                    className={`header__body service-menu-visible service-menu text-start`}
                    style={{ display: menuVisibleService ? `flex` : 'none' }}
                  >
                    <div className="header__center center header-dropdown-body">
                      <div
                        className={`header__row row `}
                       
                      >
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className={`header__category cursor_pointer`}>
                            <Link
                              href="#"
                              legacyBehavior={true}
                            >
                              <div onClick={handleSidebar}>Web Solutions</div>
                            </Link>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/ror1.webp"
                                        alt="ROR - Icon"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Ruby on Rails Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/react_3.webp"
                                        alt="React Icon"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      React / NextJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                   
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/vuejs.webp"
                                        alt="Vuejs PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      VueJs / NuxtJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div
                              className="col-lg-12 header-solutions-outer"
                              style={{ position: 'relative' }}
                            >
                               <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/node_2.webp"
                                        alt="Nodejs PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      NodeJs Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                   
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/laravel.webp"
                                        alt="Laravel PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Laravel Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/shopify_icon.webp"
                                        alt="Shopify Icon"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Shopify</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                           
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/wordpress.webp"
                                        alt="Wordpress Icon"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Wordpress
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className={`header__category cursor_pointer `}>
                            <Link
                              href="#"
                              legacyBehavior={true}
                            >
                              <div onClick={handleSidebar}>
                                Mobile Solutions
                              </div>
                            </Link>
                          </div>
                          <div className="row ">
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/android_2.webp"
                                        alt="Android PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Android App Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/ios.webp"
                                        alt="iOS PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      IOS App Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/react_native.webp"
                                        alt="iOS PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      React Native Development
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/images/flutter.webp"
                                        alt="Flutter PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Flutter</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          
                          </div>
                          <div
                            className={`header__category cursor_pointer mt-3 `}
                          >
                            <Link href="#" legacyBehavior={true}>
                              <div onClick={handleSidebar}>DevOps</div>
                            </Link>
                          </div>
                          <div className="row ">
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2  col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 

                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/Unionautomation.svg"
                                        alt="automatin PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Automation
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/VectorCICD.svg"
                                        alt="cicd PNG Image"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">CI/CD</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/img/cloud.webp"
                                        alt="3D Cloud"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Cloud Engineering
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className={`header__category }`}>
                            Miscellaneous
                          </div>

                          <div className="row">
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/content-management-system.webp"
                                        alt="3D Pencil"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">UI / UX</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/bag-front-color.webp"
                                        alt="3D Bag"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      E-commerce Solutions
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/notebook-iso-color.webp"
                                        alt="3D Notebook"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Content Management System
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/customer-relationship-management.webp"
                                        alt="3D Customer"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Customer Relationship Management
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/digital-marketing.webp"
                                        alt="3D Speaker"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Digital Marketing (PPC, SEO, ORM)
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                               
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/deployment-host-management.webp"
                                        alt="3D Deployment PNG"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      Deployment and Host Management
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/strapi-frame.webp"
                                        alt="strapi PNG"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Strapi</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                 
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/chatwoot.webp"
                                        alt="chatwoot PNG"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">Chatwoot</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-12 header-solutions-outer">
                            <Link href="#">
                                <div
                                  className="row cursor_pointer"
                                  onClick={handleSidebar}
                                >
                                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  
                                    <div className="header-solutions-icon">
                                      <Image
                                        src="/icons/openai1.svg"
                                        alt="openAI icon svg"
                                        layout="fill"
                                        priority={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                    <div className="header__info">
                                      OpenAI (ChatGPT)
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                <Link href="/about-us">
                  <div
                    className={
                      currentPath === '/about-us'
                        ? 'cursor_pointer header__item header__item_index nav-css underline_text '
                        : 'cursor_pointer header__item header__item_index nav-css blue-underline'
                    }
                    onClick={handleSidebar}
                  >
                    About Us
                  </div>
                </Link>
                <Link href="#">
                  <div
                    className={
                      currentPath === '/careers'
                        ? 'cursor_pointer header__item header__item_index nav-css underline_text'
                        : 'cursor_pointer header__item header__item_index nav-css blue-underline'
                    }
                    onClick={handleSidebar}
                  >
                    Careers
                  </div>
                </Link>
                
              {/* <div
                  className={`header__item`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`btn-outline-danger cursor_pointer header__head2 ${
                      menuVisible ? 'service-underline' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    Case Studies
                    {menuVisible ? (
                      <svg
                        className="iconup icon-arrow-down"
                        aria-labelledby="arrow-down-icon"
                      >
                        <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    ) : (
                      <svg
                        className="icon icon-arrow-down"
                        aria-labelledby="arrow-down-icon"
                      >
                        <use xlinkHref="/img/sprite.svg#icon-arrow-down"></use>
                      </svg>
                    )}
                  </div>
                  <div
                    className={`header__body2 service-menu-visible`}
                    style={{ display: menuVisible ? `flex` : 'none' }}
                  >
                    <div className={`header__row row ${styles.casestudy}`}>
                      <div
                        className={`col-lg-4 col-md-4 col-sm-4 ${styles.row}`}
                      >
                        <div className={`header__category cursor_pointer `}>
                          <Link
                            href="/services/web-solutions"
                            legacyBehavior={true}
                          >
                            <div onClick={handleSidebar}></div>
                          </Link>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 header-solutions-outer">
                            <Link href="/Case_Study_List/1">
                              <div
                                className="row cursor_pointer"
                                onClick={handleSidebar}
                              >
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  <div className="header-solutions-icon">
                                    <Image
                                      src="/blogs/mg_glass2.png"
                                      alt="search icon"
                                      height={35}
                                      width={35}
                                      priority={true}
                                      objectFit="cover"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                  <div className="header__info">
                                    Mobile App For Divers
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg-12 header-solutions-outer">
                            <Link href="/Case_Study_List/2">
                              <div
                                className="row cursor_pointer"
                                onClick={handleSidebar}
                              >
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  <div className="header-solutions-icon">
                                    <Image
                                      src="/blogs/mg_glass2.png"
                                      alt="search icon"
                                      height={35}
                                      width={35}
                                      priority={true}
                                      objectFit="cover"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                  <div className="header__info">
                                    International E-Commerce
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg-12 header-solutions-outer">
                            <Link href="/Case_Study_List/3">
                              <div
                                className="row cursor_pointer"
                                onClick={handleSidebar}
                              >
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  <div className="header-solutions-icon">
                                    <Image
                                      src="/blogs/mg_glass2.png"
                                      alt="search icon"
                                      height={35}
                                      width={35}
                                      priority={true}
                                      objectFit="cover"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                  <div className="header__info">
                                    Logistics Management
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-lg-12 header-solutions-outer"
                            style={{ position: 'relative' }}
                          >
                            <Link href="/Case_Study_List/4">
                              <div
                                className="row cursor_pointer"
                                onClick={handleSidebar}
                              >
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  <div className="header-solutions-icon">
                                    <Image
                                      src="/blogs/mg_glass2.png"
                                      alt="search icon"
                                      height={35}
                                      width={35}
                                      priority={true}
                                      objectFit="cover"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                  <div className="header__info">
                                    Video Call Support App
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="col-lg-12 header-solutions-outer">
                            <Link href="/Case_Study_List/5">
                              <div
                                className="row cursor_pointer"
                                onClick={handleSidebar}
                              >
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center">
                                  <div className="header-solutions-icon">
                                    <Image
                                      src="/blogs/mg_glass2.png"
                                      alt="search icon"
                                      height={35}
                                      width={35}
                                      priority={true}
                                      objectFit="cover"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ps-0 ms-0">
                                  <div className="header__info">
                                    Customer Engagement App
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                  </div>
                </div> */}
              
              </nav>
              <div className="header__photo">
                <div className="header__pic">
                  <div style={{ zIndex: '999' }}>
                    <Image
                      src="/img/menu-pic.webp"
                      alt="3D Computer System"
                      width={350}
                      height={308}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        
        </div>
      </header>
    </>
  )
}

export default Header
