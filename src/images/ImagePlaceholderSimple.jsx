import { useState } from 'react';

import './images.scss';
import ImagePlaceholderProgressionButtons from './ImagePlaceholderProgressionButtons';

function ImagePlaceholderSimple({src, alt, width, height, rotation, altBorder, children}) {

    const [isActive, setActive] = useState(false);

    function toggleState() {
        setActive(!isActive);
    }

    return ( 
        <div 
            className={"ImagePlaceholder ImagePlaceholderSimple" + (altBorder? " ImagePlaceholderAltBorder" : "")} 
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
                <div className='buttons'>
                    <ImagePlaceholderProgressionButtons />
                    <button className='info' onClick={toggleState}>i</button>
                </div>
            </div>
        </div>
     );
}

export default ImagePlaceholderSimple;