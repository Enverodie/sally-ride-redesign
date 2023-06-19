import { createContext } from "react";

export const ImagePoolDefaultObject = (function() {
    
    const imagePool = {};

    let imagePoolActive = true;

    function addToImagePool(poolNumber, imageID) {
        // we use an object here to ensure image IDs are unique
        if (imagePool[poolNumber] === undefined) imagePool[poolNumber] = {};
        imagePool[poolNumber][imageID] = true;
    } 

    function removeFromImagePool(poolNumber, imageID) {
        if (imagePool[poolNumber] === undefined || imagePool[poolNumber][imageID] === undefined) return;
        Reflect.deleteProperty(imagePool[poolNumber], imageID);
    }

    function addAllDefaults() {
        addToImagePool(0, 0);
        addToImagePool(1, 1);
        addToImagePool(0, 2);
        addToImagePool(1, 3);
        addToImagePool(0, 4);
    }

    function clearImagePool(poolNumber) {
        if (imagePool[poolNumber] === undefined) return;
        Reflect.deleteProperty(imagePool, poolNumber);
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
        addAllDefaults,
        clearImagePool,
        getImagesInPool
    }
})();

export const ImagePoolContext = createContext(null);