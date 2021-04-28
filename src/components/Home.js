// import logo from '../fds.jpeg'

const Home = () => {
  return (
    <div className="container home">
      <h2>Food Delivery Appication</h2>
      <div className="home-div">
        <div className="home-discription">
            <p className="quote1">GOOD FOOD IS GREAT MOOD,here to serve your hungry stomach</p>
            {/* <p className="quote2">Food shared is happiness multiplied.</p> */}
        </div>
        <div className="fds-img"></div>
      </div>

      {/* <img src={logo} width="100px" height="100px"/> */}
    </div>
  );
};

export default Home;
