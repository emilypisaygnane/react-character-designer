import '..Main/main.css';
import { useState } from 'react';
import Display from '../display/display';
import Character from '../Character/character';
import background from '../background/background.png';
import Controls from '../Control/control';
// import Catchphrase from

export default function Main() {
  const [top, setTop] = useState('');
  const [topCount, setTopCount] = useState(0);
  const [bottom, setBottom] = useState('');
  const [bottomCount, setBottomCount] = useState(0);
  const [shoe, setShoe] = useState('');
  const [shoeCount, setShoeCount] = useState(0);

  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="tools">
        <Controls
          top={top}
          setTop={setTop}
          setTopCount={setTopCount}
          bottom={bottom}
          setBottom={setBottom}
          setBottomCount={setBottomCount}
          shoe={shoe}
          setShoe={setShoe}
          setShoeCount={setShoeCount}
        />
        {/* <Catchphrase 

        /> */}
        <Display
          topCount={topCount}
          bottomCount={bottomCount}
          shoeCount={shoeCount}
        />
      </div>
      <Character top={top} bottom={bottom} shoe={shoe} />
    </div>
  );
}