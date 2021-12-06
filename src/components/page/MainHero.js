import mainImage from '../../images/mainImage.jpg'

const MainHero = () => {
  return (
    <div className={'container col-xxl-8 px-4 py-5'}>
      <div className={'row flex-lg-row-reverse align-items-center g-5 py-5'}>
        <div className={'col-10 col-sm-8 col-lg-6'}>
          <img
            src={mainImage}
            className={'d-block mx-lg-auth img-fluid'}
            alt={'오늘 뭐먹지 메인 이미지'}
            width={'700'}
            height={'500'}
            loading={'lazy'}
          />
        </div>


        <div className={'col-lg-6'}>
          <h1 className={'display-5 fw-bold lh-1 mb-3'}>근처의 식당 추천</h1>
          <p className={'lead'}>
            카카오 API를 이용, 근처의 식당을 자동으로 탐색하고 추천해줌으로써 사용자의 식사 선택 시간을 줄여줍니다.
          </p>
          <div className={'d-grid gap-2 d-md-flex justify-content-md-start mt-5'}>
            <a
              href={'/recommendation'}
              type={'button'}
              className={'btn btn-success btn-lg px-4 me-md-2'}>
              식사 추천
            </a>
            <a
              href={'/feature'}
              type={'button'}
              className={'btn btn-outline-secondary btn-lg px-4'}
            >Feature</a>
          </div>
        </div>



      </div>
    </div>
  )
}

export default MainHero;