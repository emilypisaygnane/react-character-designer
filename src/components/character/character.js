export default function Character({ top, bottom, shoe }) {

  return ( 
    <div className="character">
      <h1 className="title">Time to feel good, baby!</h1>
      <img className="tops" src={`${process.env.PUBLIC_URL}/character/${top}-top.png`}/> 
      <img className="bottoms" src={`${process.env.PUBLIC_URL}/character/${bottom}-bottom.png`} />
      <img className="shoes" src={`${process.env.PUBLIC_URL}/character/${shoe}-shoe.png`} />
    </div>
  );

}