import { useRef } from "react";
// import Xarrow from "react-xarrows";
import Arrow, { DIRECTION } from 'react-arrows';
import PaintImg from './watercolor_2.svg';

function ImagePlaceholderComplex({src, alt, width, height, rotation, children}) {

    const mainElement = useRef(null);
    const labelElement = useRef(null);

    /*
    let toBottom = {
        direction: DIRECTION.BOTTOM,
        node: () => document.getElementById('mainElement'),
        translation: [-.2, 2],
    };
    */
    
    let toLeft = {
        direction: DIRECTION.LEFT,
        node: () => document.getElementById('mainElement'),
        translation: [-.5, 0],
    }

    return ( 
        <div 
            id="mainElement"
            className="ImagePlaceholder ImagePlaceholderComplex" 
            style={{
                width: width || "250px", 
                height: height || "250px", 
                left: "600px",
                transform: `rotate(${rotation || "0deg"})`,
        }}>
            <div 
                ref={mainElement} 
                className="content"
            >
                <img className="backgroundImage" src={src} alt={alt} />
            </div>
            <div 
                ref={labelElement}
                id="labelElement"
                className="label"
                style={{transform: `rotate(${-rotation || "0deg"})`
            }}>
                <img className="labelbackground" src={PaintImg} alt="" aria-hidden="true" />
                <div className="labeltext">
                    {children}
                </div>
            </div>
            {/* <Xarrow
                start={labelElement}
                end={mainElement} 
                startAnchor={{position: "bottom", offset: {y: 100}}}
                endAnchor={{position: "bottom"}}
                color="var(--defaultwhite)"
                dashness={true}
                path="grid"
                curveness="30"
            /> */}
            <Arrow
                className="ImagePlaceholderComplex arrow"
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById('labelElement'),
                    // translation: [.4, 3],
                    translation: [.5, 1.3],
                }}
                to={toLeft}
                // onChange={}
            />
        </div>
     );
}

export default ImagePlaceholderComplex;