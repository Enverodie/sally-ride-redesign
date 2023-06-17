import { createContext } from "react";

export const ImagePoolDefaultObject = (function() {
    
    const imagePool = {};

    let imagePoolActive = true;

    function addToImagePool(poolNumber, imageID) {
        // we use an object here to ensure image IDs are unique
        if (imagePool[poolNumber] === undefined) imagePool[poolNumber] = {};
        imagePool[poolNumber][imageID] = true;
        console.log(imagePool);
    } 

    function removeFromImagePool(poolNumber, imageID) {
        if (imagePool[poolNumber] === undefined || imagePool[poolNumber][imageID] === undefined) return;
        Reflect.deleteProperty(imagePool[poolNumber], imageID);
    }

    /**
     * 
     * @param {Number} poolNumber 
     * @returns Shallow copy of the array of image IDs in the pool or -1 if pool doesn't exist
     */
    function getImagesInPool(poolNumber) {
        if (imagePool[poolNumber] === undefined) return -1;
        return Object.keys(imagePool[poolNumber]);
    }

    return {
        imagePoolActive,
        addToImagePool,
        removeFromImagePool,
        getImagesInPool
    }
})();

export const ImagePoolContext = createContext(null);