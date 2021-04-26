import { Link } from "react-router-dom"
import './navDesign.css'

const Nav = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <li className="navbar-brand">
              <Link to="/">Home</Link>
            </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link to="/customer">Customer</Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li className="nav-item">
              <Link to="/category">Category</Link>
            </li>
            <li className="nav-item">
              <Link to="/item">Item</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">FoodCart</Link>
            </li>
            <li className="nav-item">
              <Link to="/order">orderDetail</Link>
            </li>
            <li className="nav-item">
              <Link to="/bill">Bill</Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
  );
};

export default Nav;
