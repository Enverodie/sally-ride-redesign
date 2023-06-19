import { useReducer, useContext } from "react";
import ImagePlaceholderComplex from "./ImagePlaceholderComplex";
import ImagePlaceholderSimple from "./ImagePlaceholderSimple";
import PlaceholderImg1 from './index_images/sr1.jpg';
// TODO: get a placeholder image
import ShowAtBreakpoint from "../ShowAtBreakpoint";
import { ImagePoolContext } from "../contexts/ImagePoolContext";
import { ImagePlaceholderContext } from "../contexts/ImagePlaceholderContext";
import ImageDetails, { ImageDetail } from "./ImageDetails";

const initialPlaceholderState = {
    poolIndex: 0,

    // related variables
    indexOffset: 0,
    isAnimating: false,
}

function ImagePlaceholderController({ width, height, rotation, altBorder, poolNumber }) {
    
    poolNumber = (typeof poolNumber !== 'undefined') ? poolNumber : 0;

    const imagePool = useContext(ImagePoolContext);
    const imagesInPool = imagePool.getImagesInPool(poolNumber);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'change-offset':
                let newOffset = loopWithinArray(action.payload, state.poolIndex, imagesInPool);
                // let newOffset = getNewPoolIndex(state.indexOffset + action.payload);
                return { ...state, indexOffset: newOffset, isAnimating: true };
            case 'finished-animating':
                console.log("animation ended");
                return { ...state, isAnimating: false, poolIndex: state.indexOffset, indexOffset: 0 };
            default:
                throw new SyntaxError("ImagePlaceholderController reducer action type not recognized.");
        }
    }

    const [ state, dispatch ] = useReducer(reducer, initialPlaceholderState);
    
    // immediately after this variable is updated, 
    // set the class of the bottom image to visible and the first to fading
    
    const placeholderSrc = PlaceholderImg1;
    const placeholderAlt = "image not found";
    const placeholderDescription = placeholderAlt;
    
    function getImage(offset) {
        let index = loopWithinArray(offset, state.poolIndex, imagesInPool);
        if (imagesInPool === -1) {
            console.error(`Found no pool corresponding to imagePool #${poolNumber}`);
            return ImageDetail(placeholderSrc, placeholderAlt, placeholderDescription);
        } 
        let imageID = imagesInPool[index];
        return ImageDetails[imageID];
    }

    return (
        <ImagePlaceholderContext.Provider value={{ dispatch }}>
            <div className="ImagePlaceholderController">
                
                {/* <div>
                    <ImageDisplay src={getImage(-1).src} alt={getImage(-1).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(-1).details}</ImageDisplay>
                </div> */}
                <div className={"visible" + (state.isAnimating? ' fading' : '')} onTransitionEnd={() => dispatch({type: 'finished-animating'})} style={{zIndex: '1'}}>
                    <ImageDisplay src={getImage(0).src} alt={getImage(0).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(0).details}</ImageDisplay>
                </div>
                <div className={(state.isAnimating? 'visible' : '')}>
                    <ImageDisplay src={getImage(state.indexOffset).src} alt={getImage(state.indexOffset).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(state.indexOffset).details}</ImageDisplay>
                </div>
                
            </div>
        </ImagePlaceholderContext.Provider>
    );
}

function ImageDisplay({ src, alt, width, height, rotation, altBorder, children }) {

    // default values
    width = width || "85%";
    height = height || "75%";
    rotation = rotation || "-7deg";
    children = children || "Sample description";

    return (
        <>
            <ShowAtBreakpoint min={"Tablet"} max={"Tablet"}>
                <ImagePlaceholderSimple src={src} alt={alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{children}</ImagePlaceholderSimple>
            </ShowAtBreakpoint>
            <ShowAtBreakpoint min={"Desktop"} max={"Desktop"}>
                <ImagePlaceholderComplex src={src} alt={alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{children}</ImagePlaceholderComplex>
            </ShowAtBreakpoint>
        </>
    )
}

function loopWithinArray(newNumber, startingPoint, array) {
    // keep value in range
    let newvalue = (startingPoint + newNumber) % array.length;
    if (newvalue < 0) newvalue = array.length - 1;
    return newvalue;
}

export default ImagePlaceholderController;