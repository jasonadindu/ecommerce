const Header = ({ title, link }) => {
  return (
    <header className="header">
      <div className="container">
        <h3>Ecommerce</h3>
        <ul>
          <li>
            <a href="#one">Home</a>
          </li>
          <li>
            <a href="#two">About Us</a>
          </li>
          <li>
            <a href="#Three">Contact Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
