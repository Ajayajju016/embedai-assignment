import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const CatogoriesCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="cat-con">
      <h3>Try these</h3>
      <Slider {...settings}>
        <div className="cat-sub-con">
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="cat-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="catogory-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
        </div>
        <div className="cat-sub-con">
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="cat-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="catogory-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
        </div>
        <div className="cat-sub-con">
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="cat-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="catogory-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
        </div>
        <div className="cat-sub-con">
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="cat-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="catogory-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
        </div>
        <div className="cat-sub-con">
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="cat-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
          <div className="cat-inner-con">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              alt="catogory-img"
              className="cat-img"
            />
            <div>
              <p>Practice new language</p>
              <p>with hyper gloat</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CatogoriesCarousel
