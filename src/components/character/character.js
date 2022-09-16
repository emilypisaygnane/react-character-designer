export default function Character({ tops, bottoms, shoes }) {
  return ( 
    <div className="character">
      <h1 className="title">title</h1>
      <img className="tops" src={`${process.env.PUBLIC_URL}/character/${tops}-top.png`}/> 
      <img className="bottoms" src={`${process.env.PUBLIC_URL}/character/ ${bottoms}-bottom.png`} />
      <img className="shoes" src={`${process.env.PUBLIC_URL}/character/${shoes}-shoe.png`} />
    </div>
  );

}