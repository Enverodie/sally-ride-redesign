import { useState } from "react";
import Arrow, { DIRECTION } from 'react-arrows';
import PaintImg from './smear_2.png';

function ImagePlaceholderComplex({src, alt, width, height, rotation, children}) {

    const [isHovered, setHovered] = useState(false);
    
    function onHoverOverImage(cursorOn) {
        setHovered(cursorOn);
    }

    // fine tuned arrow end directions
    /*
    let toBottom = {
        direction: DIRECTION.BOTTOM,
        node: () => document.getElementById('mainElement'),
        translation: [-.2, 2],
    };
    */

    let toLeft = {
        direction: DIRECTION.BOTTOM_LEFT,
        node: () => document.getElementById('mainElementPointerBox'),
        translation: [-.3, .4],
    }

    const arrow = (
        <Arrow
            className="ImagePlaceholderComplex arrow"
            from={{
                direction: DIRECTION.BOTTOM,
                node: () => document.getElementById('labelElement'),
                translation: [.5, 1.3],
            }}
            to={toLeft}
        />
    )

    return ( 

        <div 
            className={"ImagePlaceholderComplex" + (isHovered? " hovered" : "")}
            onMouseEnter={() => onHoverOverImage(true)}
            onMouseLeave={() => onHoverOverImage(false)}
            // for some reason we have to include the styles here instead of in the stylesheet
            // because there will be clipping with the arrow if done in the stylesheet
            style={{
                width: "fit-content",
                height: "100%",
                position: "relative",
                padding: "1em",
                boxSizing: "border-box",
            }}
        >
            <div id="mainElement" className="ImagePlaceholder" style={{ width: width || "250px", height: height || "250px", transform: `rotate(${rotation || "0deg"})` }}>
                <div className="content">
                    <div id="mainElementPointerBox" class="mainElementPointerBox" style={{transform: `rotate( calc(${'-1 *' + rotation || '0deg'}) )`}}></div>
                    <img className="backgroundImage" src={src} alt={alt} />
                </div>
            </div>

            <div id="labelElement" className="label">
                <img className="labelbackground" src={PaintImg} alt="" aria-hidden="true" />
                <div className="labeltext">
                    {children}
                </div>
            </div>

            {isHovered && arrow}
        </div>
     );
}

export default ImagePlaceholderComplex;