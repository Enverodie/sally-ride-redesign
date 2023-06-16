import { createContext } from "react";

const ImagePoolObject = (function() {
    
    const imagePool = {};

    let imagePoolActive = false;

    function addToImagePool(poolNumber, imageID) {
        if (imagePool[poolNumber] === undefined) imagePool[poolNumber] = [];
        imagePool[poolNumber] = [...imagePool[poolNumber], imageID];
    } 

    /**
     * 
     * @param {Number} poolNumber 
     * @returns Shallow copy of the array of image IDs in the pool or -1 if pool doesn't exist
     */
    function getImagesInPool(poolNumber) {
        if (imagePool[poolNumber] === undefined) return -1;
        return [...imagePool[poolNumber]];
    }

    return {
        imagePoolActive,
        addToImagePool,
        getImagesInPool
    }
})();

export const ImagePoolContext = createContext(ImagePoolObject);