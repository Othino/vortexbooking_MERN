import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://static.designboom.com/wp-content/uploads/2014/04/richard-branson-mahali-mzuri-kenya-safari-lodges-designboom-03.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mahali Mzuri Safari Camp</span>
        <span className="fpCity">Maasai Mara</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/11/20/112036_v2.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Southern Palms Beach Resort</span>
        <span className="fpCity">Diani</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://pbs.twimg.com/media/DTVld9zXkAA1zLm?format=jpg&name=4096x4096"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Neptune Paradise Hotel</span>
        <span className="fpCity">Galu</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Naivasha</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
