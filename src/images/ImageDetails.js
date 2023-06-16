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
function ImageDetail(src, alt) {
    return new function() {
        this.src = src;
        this.alt = alt;
    }
}

// Image ID corresponds to the index in the array
const ImageDetails = [
    ImageDetail(Img1, ""),
    ImageDetail(Img2, ""),
    ImageDetail(Img3, ""),
    ImageDetail(Img4, ""),
    ImageDetail(Img5, ""),
]

export default ImageDetails;