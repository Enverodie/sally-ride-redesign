import { useState } from "react";
import ImageDetails from "./ImageDetails";

import 'images.scss';

/**
 * 
 * @param {number[]} images A list of IDs corresponding to the ImageDetails image
 */
function MultipleImageSelector({images, children}) {

    const [ selectedImageIndex, setSelectedImageIndex ] = useState(0);
    let selectedImage = ImageDetails[images[selectedImageIndex]];

    const options = images.map((imageID, arrayIndex) => {
        return (
            <option onClick={() => {setSelectedImageIndex(arrayIndex)}}>
                {ImageDetails[imageID].details}
            </option>
        );
    })

    return (
        <div className="MultipleImageSelector">
            <div className="text">{children}</div>
            <div className="images">
                <select>
                    { options }
                </select>
                <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
        </div>
    );
}

export default MultipleImageSelector;