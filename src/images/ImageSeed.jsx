import { useState, useContext } from "react";
import { ImagePoolContext } from '../contexts/ImagePoolContext';
import ImageDetails, { ImageDetail } from './ImageDetails';
import * as BreakpointHandling from '../breakpointHandling';
import ImagePlaceholderSimple from './ImagePlaceholderSimple';

import './images.scss'

function ImageSeed({imageID, imagePoolNumber, minBreakpoint, maxBreakpoint}) {

    if (imageID === undefined) throw new SyntaxError("ImageSeed must have associated imageID prop");
    imagePoolNumber = imagePoolNumber || 0;

    let imagePool = useContext(ImagePoolContext);
    let imageData = ImageDetails[imageID] || ImageDetail("", "image not found", "this image was not found");

    let [ shouldRender, updateShouldRender ] = useState(BreakpointHandling.shouldRender(BreakpointHandling.getBreakpoint(), minBreakpoint, maxBreakpoint));


    window.addEventListener('resize', () => {
        let newShouldRenderValue = BreakpointHandling.shouldRender(BreakpointHandling.getBreakpoint(), minBreakpoint, maxBreakpoint);
        if (newShouldRenderValue !== shouldRender) updateShouldRender(newShouldRenderValue); 
    })

    if (shouldRender) {
        imagePool.removeFromImagePool(imagePoolNumber, imageID);
        return (
            <div className="imageSeedContainer">
                <ImagePlaceholderSimple src={imageData.src} alt={imageData.alt}>
                    {imageData.details}
                </ImagePlaceholderSimple>
            </div>
        )
    }
    else {
        imagePool.addToImagePool(imagePoolNumber, imageID);
        return null;
    }

}

export default ImageSeed;