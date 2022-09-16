// import '..Main/main.css';
import { useState } from 'react';
import Display from '../display/display';
import Character from '../Character/character';
import background from '../background/background.png';
import Controls from '../Control/control';

export default function Main() {
  const [top, setTop] = useState('');
  const [topCount, setTopCount] = useState(0);
return (
    <div className="main" style={{ backgroundImage: `url(${background})`}}>
      <div className="tools">
        <Controls 
        top={top}
        setTop={setTop}
        setTopCount={setTopCount}
        />
        <Catchphrase 

        />
        <Display
        topCount={topCount}
        />
      </div>
      <Character top={top}
    </div>
    );
}