import { useState } from "react";
import ImageDetails from "./ImageDetails";

import './images.scss';
import GenericDropdown from "../buttons/GenericDropdown";

/**
 * An extended functionality variant of MultipleImageSelector that allows description switching based on image
 * @param {{id:Number, text:JSXElement}[]} images A list of IDs corresponding to the ImageDetails image
 */
function MultipleImageSelectorDescription({images}) {

    const [ selectedImageIndex, setSelectedImageIndex ] = useState(0);
    let selectedImage = ImageDetails[images[selectedImageIndex].id];

    let imagesNames = images.map(image => {return ImageDetails[image.id].details});

    return (
        <div className="MultipleImageSelector">
            <div className="text">
                <div style={{position: 'relative'}}>
                    {images.length > 1 && (
                    <GenericDropdown className="imageSelector" options={imagesNames} onOptionSelect={setSelectedImageIndex} />
                    )}
                </div>
                {images[selectedImageIndex].text}
            </div>
            <div className="images">
                <div className="imageScroller">
                    <img style={{margin: 0}} src={selectedImage.src} alt={selectedImage.alt} />
                </div>
            </div>
        </div>
    );
}

export default MultipleImageSelectorDescription;