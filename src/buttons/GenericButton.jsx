import './buttons.scss';

function GenericButton({src, target, windowFeatures, onClick, children, style}) {

    function onClickFull() {

        if (typeof onClick === 'function') onClick();
        if (src) window.open(src, target, windowFeatures);
    }

    return ( 
        <button className='GenericButton' onClick={onClickFull} style={style}>
            <div className='content'>
                {children}
            </div>
        </button>
     );
}

export default GenericButton;