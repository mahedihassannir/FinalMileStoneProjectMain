import { useState } from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

import Typical from 'react-typical'


const Sicretman = () => {
    const [scale, setScale] = useState(1.15);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Tilt scale={scale} transitionSpeed={2500} reset={false} tiltMaxAngleX={20} >
                <div style={{ height: '300px', width: '300px', }}>
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="form">

                    <input

                        type="range"

                        min="0.7"

                        max="1.5"

                        step="0.01"

                        value={scale}

                        onChange={(ev) => setScale(parseFloat(ev.target.value))}

                    />

                </div>
            </Tilt>
            {/* <Typical className="text-2xl font-bold text-red-400"
                steps={['i am Mahedi HAssan ', 1000, 'I am a developer!', 2000, "a developer"]}
                loop={Infinity}
                wrapper="p"
            /> */}
        </div>
    );
};
// ReactDOM.render(<Sicretman />, document.getElementById('root'));
export default Sicretman;