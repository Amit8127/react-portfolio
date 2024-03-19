import LogoA from '../../../assets/images/AmitPng.png';
import './Logo.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoA}
        alt="bannerImg"
      />
      <span></span>
    </div>
  )
}

export default Logo