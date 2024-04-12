import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Sidebar extends Component {
  state = {isHovered: false, isOpenSidebar: true}

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const width = window.innerWidth
    if (width <= 768) {
      this.setState({isOpenSidebar: false})
    } else {
      this.setState({isOpenSidebar: true})
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({isOpenSidebar: !prevState.isOpenSidebar}))
  }

  handleMouseEnter = () => {
    this.setState({isHovered: true})
  }

  handleMouseLeave = () => {
    this.setState({isHovered: false})
  }

  render() {
    const {isHovered, isOpenSidebar} = this.state
    const sidebarClass = isOpenSidebar ? 'sidebar' : 'sidebar closed'
    return (
      <div>
        <div className={sidebarClass}>
          {isOpenSidebar && (
            <div className="list">
              <div className="sidebar-ham-container">
                <Link to="/" className="logo">
                  character.ai
                </Link>
                <p onClick={this.toggleSidebar}>..</p>
              </div>
              <div
                className="create-btn-container"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <button className="create-btn">+ create</button>
                {isHovered && (
                  <div
                    className="popup-container"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    <div className="popup-content">
                      <p>
                        <Link to="/create-character">Character</Link>
                      </p>
                      <p>Voice</p>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/discover">
                <button className="dicover-btn">Discover</button>
              </Link>
              <h4>Chats</h4>
              <div className="chat-list">
                <Link to="/chat/1" className="chat-container">
                  <img
                    src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                    alt="Chat Image"
                  />
                  <p>Chat 1</p>
                </Link>
                <Link to="/chat/2" className="chat-container">
                  <img
                    src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                    alt="Chat Image"
                  />
                  <p>Chat 2</p>
                </Link>
              </div>
            </div>
          )}
          {!isOpenSidebar && (
            <p className="open-side-bar" onClick={this.toggleSidebar}>
              Open
            </p>
          )}
        </div>
        <div className="profile-con">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    )
  }
}

export default Sidebar
