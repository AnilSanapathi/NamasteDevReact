import { Link } from "react-router-dom";

const Title = () => {
  return (
    <img
      className="image"
      alt="text"
      src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
    />
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/aboutClass'> About Class</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/instamart'>Instamart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
