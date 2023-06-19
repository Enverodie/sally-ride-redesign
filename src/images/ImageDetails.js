/**
 * ImageDetails.js collects and associates various metadata 
 * with images available throughout the website.
 */

import Img1 from './index_images/sr1.jpg';
import Img2 from './index_images/sr2.jpg';
import Img3 from './index_images/sr3.jpg';
import Img4 from './index_images/sr4.jpg';
import Img5 from './index_images/sr5.jpg';

/**
 * Object constructor that stores all image metadata
 * @param {*} src The image associated with a file
 * @param {*} alt The alt description for the image
 * @returns Object representing the image
 */
export function ImageDetail(src, alt, details) {
    return new (function() {
        this.src = src;
        this.alt = alt;
        this.details = details;
    })();
}

// Image ID corresponds to the index in the array
const ImageDetails = [
    ImageDetail(Img1, "Sally Ride in spacecraft", "Sally Ride during the STS-7 mission in 1983"),
    ImageDetail(Img2, "A rocket with attached space shuttle", "The Challenger mission"),
    ImageDetail(Img3, "Sally posing with crew in front of space shuttle image", "Sally & crew"),
    ImageDetail(Img4, "Sally behind a podium smiling", "Sally at a science festival"),
    ImageDetail(Img5, "Tam speaking into a microphone in front of a projector showing Sally smiling", "Tam O'Shaughnessy"),
]

export default ImageDetails;