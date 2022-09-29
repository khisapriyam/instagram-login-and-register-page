import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import AuthTemp from '../AuthTemp/AuthTemp'
import './Home.scss';

const Home = () => {
  return (
    <div>
        {/* <AuthTemp /> */}
        <TopBar />

        <div className="home-container">
          <div className="home-wrapper">
            <div className="time-line">
              
              <div className="post-card">
                <div className="post-card-header">
                  <div className="post-user-info">
                    <img src="https://i1.sndcdn.com/artworks-gLFMPgtAjm5eqNos-10X2SQ-t500x500.jpg" alt="" />
                    <div className="user-details">
                      <a href="#" className="user-name">Song Minguk</a>
                      <span className="location">Songdo</span>
                    </div>
                  </div>
                  <div className="post-opt-btn">
                    <button><svg aria-label="More Options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
                  </div>
                </div>
                <div className="post-image">
                  <img src="https://i.pinimg.com/originals/ba/88/42/ba8842a43531bb6298fbae8d26f7c4cb.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="user-info">
              User Info
            </div>
          </div>
        </div>
    </div>
  )
};

export default Home;