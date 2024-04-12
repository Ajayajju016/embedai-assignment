// HomePage.js

import React, {Component} from 'react'
import VideoCarousel from '../VideoCarousel'
import ProfilesCarousel from '../ProfilesCarousel'
import CatogoriesCarousel from '../CatogoriesCarousel'
import TrysayingSec from '../TrysayingSec'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="content-container">
          <div className="name-search-container">
            <div className="user">
              <p>Welcome back</p>
              <h2>Ajayajju</h2>
            </div>
            <div className="search-container">
              <input
                className="search-input"
                type="search"
                placeholder="Search for characters"
              />
            </div>
          </div>

          <div className="chats-home">
            <VideoCarousel />
          </div>
        </div>
        <h3 className="heading">For you</h3>
        <ProfilesCarousel />
        <CatogoriesCarousel />
        <h3 className="heading">Featured</h3>
        <ProfilesCarousel />
        <ProfilesCarousel />
        <h3 className="heading">Try Saying</h3>
        <TrysayingSec />
      </div>
    )
  }
}

export default Home
