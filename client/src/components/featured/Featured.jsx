import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1157510110/photo/scenic-of-night-cityscape-building-on-twilight-skyline.jpg?s=612x612&w=0&k=20&c=uk1IrNhBzqSzjSwi9nyIGWRKGCNwNIC_m-XY1vf4lrc="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nairobi</h1>
          <h2>51+ Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1170775456/photo/guts-bridge-mombasa.jpg?s=612x612&w=0&k=20&c=85bYfdjA4VByQlFQ4ckNB_4CLo6aY0CDnUta0qli1qo="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mombasa</h1>
          <h2>120+ Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/586737136/photo/balloon-flying-over-wildbeast-migration-masai-mara-game-reserve-kenya.jpg?s=612x612&w=0&k=20&c=Lk4NPlOYgREhQrfZaA65DYpnl863IPd_SBo812v73eA="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Maasai Mara</h1>
          <h2>15+ Resorts</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
