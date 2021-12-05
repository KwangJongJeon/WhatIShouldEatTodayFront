import mainImage from '../../images/mainImage.jpg'

const MainHero = () => {
  return (
    <div className={'container col-xxl-8 px-4 py-5'}>
      <div className={'row flex-lg-row-reverse align-items-center g-5 py-5'}>
        <div class={'col-10 col-sm-8 col-lg-6'}>
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
          <h1 className={'display-5 fw-bold lh-1 mb-3'}>Responsive left-aligned hero with image</h1>
          <p className={'lead'}>
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>


        <div className={'d-grid gap-2 d-md-flex justify-content-md-start'}>
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
  )
}

export default MainHero;