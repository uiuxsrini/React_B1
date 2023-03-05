import logo from "../logo1.png";

const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" width="150" height="100" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Profile</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;