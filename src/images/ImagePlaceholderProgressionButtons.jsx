function ImagePlaceholderProgressionButtons({onClickForward, onClickBackward}) {
    return ( 
        <div className="ImagePlaceholderProgressionButtons">
            <button onClick={onClickBackward}><div>🡄</div></button>
            <button onClick={onClickForward}><div>🡆</div></button>
        </div>
     );
}

export default ImagePlaceholderProgressionButtons;