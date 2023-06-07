import { useState } from 'react';

import './images.scss';

function ImagePlaceholderSimple({src, alt, width, height, rotation, children}) {

    const [isActive, setActive] = useState(false);

    function toggleState() {
        setActive(!isActive);
    }

    return ( 
        <div 
            className="ImagePlaceholder ImagePlaceholderSimple" 
            style={{
                width: width || "250px", 
                height: height || "250px", 
                transform: `rotate(${rotation || "0deg"})`,
            }}>
            <div className={'content' + (isActive? ' active' : '')}>
                <img className='backgroundImage' src={src} alt={alt} />
                <div className='info'>
                    <div>
                        {children}
                    </div>
                </div>
                <button className='info' onClick={toggleState}>i</button>
            </div>
        </div>
     );
}

export default ImagePlaceholderSimple;