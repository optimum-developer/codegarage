import style from './../styles/ShimmerService.module.css'

const ShimmerServices = ({ techTitle }) => {
  console.log(techTitle)
  const isWebSolutions = techTitle === 'Web Solutions'
  const isMobileSolutions = techTitle === 'Mobile Solutions'
  console.log(techTitle)
  return (
    <>
      <div className={` container ${style.container}`}>
        {/* shimmer for websolutions */}
        {isWebSolutions && (
          <div className={`${style.mainContainer}`}>
            <div className={`${style.leftContainer}`}>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={`${style.rightContainer}`}>
              <div></div>
            </div>
          </div>
        )}
        {/* shimmer for Mobilesolutions */}
        {isMobileSolutions && (
          <div className={`${style.mainContainer}`}>
            <div className={`${style.MobilesolutionsleftContainer}`}>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={`${style.MobilesolutionsrightContainer}`}>
              <div></div>
            </div>
          </div>
        )}
        {/* shimmer for other services */}
        {!isWebSolutions && !isMobileSolutions && (
        <div className={`${style.mainContainer}`}>
          <div className={`${style.leftContainer2}`}>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={`${style.rightContainer2}`}>
            <div></div>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default ShimmerServices
