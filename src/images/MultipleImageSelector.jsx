import { useState } from "react";
import ImageDetails from "./ImageDetails";

import './images.scss';
import GenericDropdown from "../buttons/GenericDropdown";

/**
 * 
 * @param {Number[]} images A list of IDs corresponding to the ImageDetails image
 */
function MultipleImageSelector({images, children}) {

    const [ selectedImageIndex, setSelectedImageIndex ] = useState(0);
    let selectedImage = ImageDetails[images[selectedImageIndex]];

    let imagesNames = images.map(imageID => {return ImageDetails[imageID].details});

    return (
        <div className="MultipleImageSelector">
            <div className="text">{children}</div>
            <div className="images">
                {images.length > 1 && (
                <GenericDropdown className="imageSelector" options={imagesNames} onOptionSelect={setSelectedImageIndex} />
                )}
                <div className="imageScroller">
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
            </div>
        </div>
    );
}

export default MultipleImageSelector;