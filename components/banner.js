import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/hireService.module.css'
const Banner = ({ techTitle }) => {
  console.log(techTitle)
  const bannerImage = [
    //web technologies
    { id: 0, name: 'Rails', path: '/icons/rails.webp', title: 'Web Solutions' },
    { id: 1, name: 'Vuejs', path: '/icons/vuejs.webp', title: 'Web Solutions' },
    {
      id: 2,
      name: 'ReactJs',
      path: '/icons/reactjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 3,
      name: 'NextJs',
      path: '/icons/nextjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 4,
      name: 'Nuxtjs',
      path: '/icons/nuxtjs.webp',
      title: 'Web Solutions',
    },
    {
      id: 5,
      name: 'Nodejs',
      path: '/icons/nodejs.webp',
      title: 'Web Solutions',
    },
    {
      id: 6,
      name: 'Shopify',
      path: '/images/shopify.webp',
      title: 'Web Solutions',
    },
    {
      id: 7,
      name: 'Laravel',
      path: '/icons/laravel.webp',
      title: 'Web Solutions',
    },
    {
      id: 8,
      name: 'Ruby',
      path: '/images/ror_orig.webp',
      title: 'Web Solutions',
    },
    {
      id: 9,
      name: 'Python',
      path: '/images/python_2.webp',
      title: 'Web Solutions',
    },

    //mobile technology
    {
      id: 10,
      name: 'Android',
      path: '/images/android_4.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 11,
      name: 'Flutter',
      path: '/images/flutter.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 12,
      name: 'Swift',
      path: '/icons/swift.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 13,
      name: 'ionic',
      path: '/icons/ionic.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 14,
      name: 'React Native',
      path: '/icons/reactjs.webp',
      title: 'Mobile Solutions',
    },
    {
      id: 12,
      name: 'Swift',
      path: '/icons/swift.webp',
      title: 'Mobile Solutions',
    },
    {
      path: '/images/video-chat-a-pro.webp',
      altImg: '',
      title: 'miscellaneous',
    },
    {
      path: '/images/desmania-design.webp',
      altImg: 'Desmania Design - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/vaayu.webp',
      altImg: 'Vaayu - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/domino-data-lab.webp',
      altImg: 'Domino Data Lab - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/ucview_2.webp',
      altImg: 'UcView - Logo',
      title: 'miscellaneous',
    },
    {
      path: '/images/golden-circle-app.webp',
      altImg: 'Golden Circle App - Logo',
      title: 'miscellaneous',
    },
  ]
  const bannerImage3 = [
    { id: 0, path: 'icons/hire/good-firms-logo.webp', title: 'Hire a Team' },
    {
      id: 1,
      path: 'icons/hire/upwork-logo-png-transparent.webp',
      title: 'Hire a Team',
    },
    {
      id: 2,
      path: 'icons/hire/clutch_logo.webp',
      title: 'Hire a Team',
    },
    {
      id: 3,
      path: 'icons/hire/PeoplePerHour_logo.webp',
      title: 'Hire a Team',
    },
    {
      id: 4,
      path: 'icons/hire/clutch_logo.webp',
      title: 'Hire a Team',
    },
    {
      id: 5,
      path: 'icons/hire/upwork-logo-png-transparent.webp',
      title: 'Hire a Team',
    },
  ]
  const bannerImage2 = [
    { name: 'Ruby on Rails', path: 'icons/rails.webp', altImg: 'Rails PNG' },
    { name: 'ReactJs', path: 'icons/reactjs.webp', altImg: 'Reactjs Icon' },
    { name: 'NextJs', path: 'icons/nextjs.webp', altImg: 'Nextjs Icon' },
    { name: 'VueJs', path: 'icons/vuejs.webp', altImg: 'Vuejs Icon' },
    { name: 'NuxtJs', path: 'icons/nuxtjs.webp', altImg: 'Nuxtjs Icon' },
    { name: 'NodeJs', path: 'icons/nodejs.webp', altImg: 'Nodejs Icon' },
    { name: 'Laravel', path: 'icons/laravel.webp', altImg: '' },
    {
      name: 'Shopify',
      path: 'images/shopify.webp',
      altImg: 'Shopify PNG Image',
    },
    {
      name: 'Wordpress',
      path: 'icons/wordpress.webp',
      altImg: 'Wordpress Icon',
    },
    {
      name: 'React Native',
      path: 'icons/reactjs.webp',
      altImg: 'Reactjs Icon',
    },
    { name: 'Ionic', path: 'icons/ionic.webp', altImg: 'Ionic Icon' },
    {
      name: 'Flutter',
      path: 'images/flutter.webp',
      altImg: 'Flutter PNG Image',
    },
    { name: 'Swift / iOS', path: 'icons/swift.webp', altImg: 'Swift Icon' },
    { name: 'Android', path: 'images/android_4.webp', altImg: '' },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          initialSlide: 0,
        },
      },
    ],
  }
  if (techTitle === 'Hire Certified and Professional Software Developers') {
    return (
      <Slider {...settings}>
        {bannerImage2.map((e, i) => (
          <div className={styles.navlogoslider} key={i}>
            <img src={e.path} alt={e.altImg} />
            <p className={styles.smalltext}>{e.name}</p>
          </div>
        ))}
      </Slider>
    )
  } else if (techTitle === 'Hire a Team') {
    return (
      <Slider {...settings}>
        {bannerImage3.map((e, i) => (
          <div className={styles.hirefreebanner} key={i}>
            <img src={e.path} alt={e.altImg} />
            <p className={styles.smalltext}>{e.name}</p>
          </div>
        ))}
      </Slider>
    )
  } else {
    const filteredBannerImages = bannerImage.filter(
      (image) => image.title === techTitle
    )
    return (
      <Slider {...settings}>
        {filteredBannerImages.map((e, i) => (
          <div className="flex" key={i}>
            <picture>
              <div className={styles.navlogoslider}>
                <img src={e.path} alt={e.name} />
                <span>{e.name}</span>
              </div>
            </picture>
          </div>
        ))}
      </Slider>
    )
  }
}

export default Banner

// else if (techTitle === 'Hire a Team') {
//   return (
//     <div className={`${styles.hirecontainer} ${styles.hirefreebanner}`}>
//     {/* <div className="hire-container hire-free-banner"> */}
//     <div className={`${styles.toprated} shadow bg-warning rounded text-dark`}>
//       {/* <div className="top-rated shadow bg-warning rounded text-dark"> */}
//       Top rated on
//     </div>
//     <img
//       className={styles.hirelogo}
//       src="icons/hire/good-firms-logo.webp"
//       alt="Good Firm - Logo"
//     />
//     <img
//       className={styles.hirelogo}
//       src="icons/hire/upwork-logo-png-transparent.webp"
//       alt="Upwork - Logo"
//     />
//     <img
//       className={styles.hirelogo}
//       src="icons/hire/clutch_logo.webp"
//       alt="Clutch - Logo"
//     />
//     <img
//       className={styles.hirelogo}
//       src="icons/hire/PeoplePerHour_logo.webp"
//       alt="People Per Hour - Logo"
//     />
//   </div>
//   );
// }
