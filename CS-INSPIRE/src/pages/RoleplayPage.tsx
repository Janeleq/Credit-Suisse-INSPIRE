// import React from 'react'
import Navbar from '../components/NavBar'
import '../styles/_roleplay.css'
import ageism from '../assets/ageism.jpg'
import haloeffect from '../assets/haloeffect.jpg'
import sexism from '../assets/sexism.jpg'
import beautybias from '../assets/beauty-bias.jpg'

function RoleplayPage() {
    return (
        <div>
            <Navbar></Navbar>
    <div className="container">
      <div className="icon-image">
        <div className="icon">
          <img src={ageism} alt="ageism" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src={ageism} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Ageism</div>
              <div className="job">Designer || Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src={sexism} alt="sexism" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src={sexism} alt="sexism" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Gender/Sexism</div>
              <div className="job">Blogger || Designer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src={haloeffect} alt="haloeffect" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src={haloeffect} alt="haloeffect" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Halo Effect</div>
              <div className="job">Designer || Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-image">
        <div className="icon">
          <img src={beautybias} alt="beautybias" />
        </div>
        <div className="hover-image one">
          <div className="img">
            <img src={beautybias} alt="beautybias" />
          </div>
          <div className="content">
            <div className="details">
              <div className="name">Beauty Bias</div>
              <div className="job">Photographer || Youtuber</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default RoleplayPage;