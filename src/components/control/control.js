import '../Control/control.js';

export default function Controls({
  top,
  setTop,
  setTopCount,

  bottom,
  setBottom,
  setBottomCount,

  shoe,
  setShoe,
  setShoeCount

}) {
  return (
    <div className='control'>
      <h1>Get Ready to Take on The Day!</h1>
      <label>Top</label>
      <select
        value={top} 
        onChange={(e) => {
          setTop(e.target.value);
          setTopCount((prevState) => prevState + 1);
        }}
      >
        <option value="asymmetrical">Black Asymmetrical</option>
        <option value="coral">Coral Halterneck</option>
        <option value="olive">Olive Bustier</option>
      </select>
      <label>Bottoms</label>
      <select 
        value={bottom}
        onChange ={(e) => {
          setBottom(e.target.value);
          setBottomCount((prevState) => prevState + 1);
        }}
      >
        <option value="denim">Light Wash Denim</option>
        <option value="leather">Leather Pants</option>
        <option value="skirt">Brown Satin Skirt</option>
      </select>
      <label>Shoes</label>
      <select
        value={shoe} 
        onChange={(e) => {
          setShoe(e.target.value);
          setShoeCount((prevState) => prevState + 1);
        }}
      >
        <option value="cowgirl">Cowgirl Boot</option>
        <option value="sparkle">Sparkly Heel</option>
        <option value="heel">Black Heel</option>
      </select>
    </div>
  );
}