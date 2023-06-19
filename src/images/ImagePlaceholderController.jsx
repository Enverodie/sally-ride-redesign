import { useReducer, useContext } from "react";
import ImagePlaceholderComplex from "./ImagePlaceholderComplex";
import ImagePlaceholderSimple from "./ImagePlaceholderSimple";
import PlaceholderImg1 from './index_images/sr1.jpg';
// TODO: get a placeholder image
import ShowAtBreakpoint from "../ShowAtBreakpoint";
import { ImagePoolContext } from "../contexts/ImagePoolContext";
import { ImagePlaceholderContext } from "../contexts/ImagePlaceholderContext";
import ImageDetails, { ImageDetail } from "./ImageDetails";

function ImagePlaceholderController({ width, height, rotation, altBorder, poolNumber }) {
    
    poolNumber = (typeof poolNumber !== 'undefined') ? poolNumber : 0;

    const imagePool = useContext(ImagePoolContext);
    const imagesInPool = imagePool.getImagesInPool(poolNumber);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'change-offset':
                let newOffset = loopWithinArray(action.payload, state.poolIndex, imagesInPool);
                return { ...state, poolIndex: newOffset };
            default:
                throw new SyntaxError("ImagePlaceholderController reducer action type not recognized.");
        }
    }

    const [ state, dispatch ] = useReducer(reducer, new (function() {
        this.poolIndex = 0;

        this.offsetImageDetails = function () {
            if (imagesInPool === -1) {
                console.error(`Found no pool corresponding to imagePool #${poolNumber}`);
                return ImageDetail(placeholderSrc, placeholderAlt, placeholderDescription);
            } 
            return ImageDetails[imagesInPool[this.imageOffset]];
        } 
    })());
    
    const placeholderSrc = PlaceholderImg1;
    const placeholderAlt = "image not found";
    const placeholderDescription = placeholderAlt;

    function getImage() {
        if (imagesInPool === -1) {
            console.error(`Found no pool corresponding to imagePool #${poolNumber}`);
            return ImageDetail(placeholderSrc, placeholderAlt, placeholderDescription);
        } 
        let imageID = imagesInPool[state.poolIndex];
        return ImageDetails[imageID];
    }

    return (
        <ImagePlaceholderContext.Provider value={{ dispatch }}>
            <ImageDisplay src={getImage().src} alt={getImage().alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage().details}</ImageDisplay>
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