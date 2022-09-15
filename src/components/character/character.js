export default function Character({ tops, bottoms, shoes }) {
  return ( 
    <div className="character">
      <h1>title:</h1>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/ ${tops}.png`} /> 
        <img src={`${process.env.PUBLIC_URL}/ ${bottoms}.png`} />
        <img src={`${process.env.PUBLIC_URL}/ ${shoes}.png`} />
      </div>
    </div>
  );

}