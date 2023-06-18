import { useState, useContext } from "react";
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

    // const [ opacityBefore, setOpacityBefore ] = useState(0);
    // const [ opacity, setOpacity ] = useState(1);
    // const [ opacityAfter, setOpacityAfter ] = useState(0);
    const [ poolIndex, setPoolIndex ] = useState(0);
    
    const placeholderSrc = PlaceholderImg1;
    const placeholderAlt = "image not found";
    const placeholderDescription = placeholderAlt;

    function getNewPoolIndex(increment) {
        // keep value in range
        let newvalue = (poolIndex + increment) % imagesInPool.length;
        if (newvalue < 0) newvalue = imagesInPool.length - 1;
        return newvalue;
    }

    function smartAddPoolIndex(increment) {
        setPoolIndex(getNewPoolIndex(increment));
    }
    
    function getImage(offset) {
        let index = getNewPoolIndex(offset);
        if (imagesInPool === -1) {
            console.error(`Found no pool corresponding to imagePool #${poolNumber}`);
            return ImageDetail(placeholderSrc, placeholderAlt, placeholderDescription);
        } 
        let imageID = imagesInPool[index];
        return ImageDetails[imageID];
    }

    return (
        <ImagePlaceholderContext.Provider value={{ poolIndex, smartAddPoolIndex }}>
            <div className="ImagePlaceholderController">
                
                <div>
                    <ImageDisplay src={getImage(-1).src} alt={getImage(-1).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(-1).details}</ImageDisplay>
                </div>
                <div style={{zIndex: '1'}}>
                    <ImageDisplay src={getImage(0).src} alt={getImage(0).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(0).details}</ImageDisplay>
                </div>
                <div>
                    <ImageDisplay src={getImage(1).src} alt={getImage(1).alt} width={width} height={height} rotation={rotation} altBorder={altBorder}>{getImage(1).details}</ImageDisplay>
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

export default ImagePlaceholderController;