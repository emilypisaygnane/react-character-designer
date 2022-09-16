import '../Control/control.js';

export default function Controls({
  top,
  setTop,
  setTopCount,

  bottom,
  setBottom,
  setBottomCount,


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
        <option default value="asymmetrical-top">Black Asymmetrical</option>
        <option default value="coral-top">Coral Halterneck</option>
        <option default value="olive-top">Olive Bustier</option>
      </select>
      <label>Bottoms</label>
      <select 
        value={bottom}
        onChange ={(e) => {
          setBottom(e.target.value);
          setBottomCount((prevState) => prevState + 1);
        }}
      >
        <option default value="denim-bottom">Light Wash Denim</option>
        <option default value="leather-bottom">Leather Pants</option>
        <option default value="skirt-bottom">Brown Satin Skirt</option>
      </select>
      <label>Shoes</label>
      <select
        value={shoe} 
        onChange={(e) => {
          setTop(e.target.value);
          setTopCount((prevState) => prevState + 1);
        }}
      >
        <option default value="cowgirl-shoe">Cowgirl Boot</option>
        <option default value="sparkle-shoe">Sparkly Heel</option>
        <option default value="heel-shoe">Black Heel</option>
      </select>
    </div>
  );
}