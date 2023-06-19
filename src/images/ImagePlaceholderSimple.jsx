import { useState, useContext } from 'react';
import { ImagePlaceholderContext } from '../contexts/ImagePlaceholderContext';

import './images.scss';
import ImagePlaceholderProgressionButtons from './ImagePlaceholderProgressionButtons';

function ImagePlaceholderSimple({src, alt, width, height, rotation, altBorder, children}) {

    const [isActive, setActive] = useState(false);

    const imagePlaceholderContext = useContext(ImagePlaceholderContext);
    const nextImageDetails = imagePlaceholderContext? imagePlaceholderContext.state.offsetImageDetails() : null;

    console.log(imagePlaceholderContext, imagePlaceholderContext.state, nextImageDetails);

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
                { 
                    nextImageDetails && 
                    <img 
                        className={'backgroundImage next' + (imagePlaceholderContext.state.isAnimating? ' appearing' : '')} 
                        onTransitionEnd={() => imagePlaceholderContext.dispatch({type: 'finished-animating'})}
                        src={nextImageDetails.src} 
                        alt={nextImageDetails.alt} />
                }
                <div className='info'>
                    <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div 
                            className={nextImageDetails? ('current' + (imagePlaceholderContext.state.isAnimating? ' appearing' : '')) : ''} 
                            style={{position: 'absolute'}}>
                            {children}
                        </div>
                        {
                            nextImageDetails &&
                            <div 
                                className={'next' + (imagePlaceholderContext.state.isAnimating? ' appearing' : '')} 
                                style={{position: 'absolute'}}>
                                {nextImageDetails.details}
                            </div>
                        }
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