export default function Character({ tops, bottoms, shoes }) {
  return ( 
    <div className="character">
      <h1 className="title">title</h1>
      <img className="tops" src={`${process.env.PUBLIC_URL}/ ${tops}.png`} /> 
      <img className="bottoms" src={`${process.env.PUBLIC_URL}/ ${bottoms}.png`} />
      <img className="shoes" src={`${process.env.PUBLIC_URL}/ ${shoes}.png`} />
    </div>
  );

}