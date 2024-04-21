import logo from "../assets/images/silicon_logo.svg"

const Logo = () => {
  return (
      <div className="header-container">
        <div className="landing-header">
          <div className="landing-silicon-logo">
            <img
              src={logo}
              alt="silicon logo"
              className="landing-silicon-logo-img"
            />

            <p className="landing-logo-text">iliconConnect</p>
          </div>
        </div>
      </div>
  )
}

export default Logo