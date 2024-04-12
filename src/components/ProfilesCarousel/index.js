import {Link} from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const details = [
  {title: 'Title', id: '1', category: 'Category'},
  {title: 'Title', id: '2', category: 'Category'},
  {title: 'Title', id: '3', category: 'Category'},
  {title: 'Title', id: '4', category: 'Category'},
  {title: 'Title', id: '5', category: 'Category'},
  {title: 'Title', id: '6', category: 'Category'},
  {title: 'Title', id: '7', category: 'Category'},
]

const ProfilesCarousel = () => {
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
    <div className="carousel-con">
      <Slider {...settings}>
        {details.map(item => (
          <Link to={`/chat/${item.id}`} key={item.id} className="card-link">
            <div className="card-carousel">
              <div className="flex-card">
                <img
                  src="https://characterai.io/i/200/static/avatars/Marco/main.jpg?webp=true&anim=0"
                  alt="card-img"
                  className="card-img"
                />
                <div className="para-con">
                  <p>{item.title}</p>
                  <p>{item.id}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default ProfilesCarousel