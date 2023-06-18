import { useContext } from "react";
import { ImagePlaceholderContext } from "../contexts/ImagePlaceholderContext";

function ImagePlaceholderProgressionButtons({onClickForward, onClickBackward}) {

    const { poolIndex, smartAddPoolIndex } = useContext(ImagePlaceholderContext);

    function onClickForwardFull() {
        if (typeof poolIndex === 'number' && typeof smartAddPoolIndex === 'function') {
            smartAddPoolIndex(1);
        } 
        if (typeof onClickForward === 'function') onClickForward()
    }
    
    function onClickBackwardFull() {
        if (typeof poolIndex === 'number' && typeof smartAddPoolIndex === 'function') {
            smartAddPoolIndex(-1);
        } 
        if (typeof onClickBackward === 'function') onClickBackward()
    }

    return ( 
        <div className="ImagePlaceholderProgressionButtons">
            <button onClick={onClickBackwardFull}><div>🡄</div></button>
            <button onClick={onClickForwardFull}><div>🡆</div></button>
        </div>
     );
}

export default ImagePlaceholderProgressionButtons;