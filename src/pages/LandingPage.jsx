import './stylesheet/LandingPage.css';
import heroIcon from '../assets/images/hero-image.svg';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container ">
      <div className="header-container">
        <div className="landing-header">
          <Logo />
          <div className="landing-header-right">
            <Link to='/signin' className="create-acc-button">Create an account</Link>
            <Link
              to='/login'
              className="landing-login-button"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="landing-body">
          <div className='hero-body-container'>
            <h1 className="landing-hero-text">
              SiliconConnect: Empowering{' '}
              <span className="landing-highlight">Polytechnique Yaoundé's</span>{' '}
              Students and Alumni, One Opportunity at a Time.
            </h1>
            <p className="landing-body-text">
              Welcome to <span>SiliconConnect</span>, your gateway to a world of
              opportunities! Whether you're a student looking for internships or
              an alumni seeking new career heights, our platform is here to
              support you. Join us today and unlock a world of possibilities!
            </p>
            <div className="get-started-btn-div">
              <Link to='/login'
                className="landing-start-btn"
                
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-img-div">
            <img src={heroIcon} alt="hero-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
