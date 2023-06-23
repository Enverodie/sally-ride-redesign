import { useState } from "react";

import './buttons.scss';

/**
 * 
 * @param {String[]} options a list of options to fill the dropdown
 * @param {Function} onOptionSelect a function executed with the supplied index of the active option
 */
function GenericDropdown({className, options, onOptionSelect}) {

    const [ optionsMenuOpen, setOptionsMenuOpen ] = useState(false);
    const [ activeOptionIndex, setActiveOptionIndex ] = useState(0);

    function toggleOptionsMenu(e) {
        if (optionsMenuOpen) e.target.blur();
        setOptionsMenuOpen(!optionsMenuOpen);
    }

    function clickOption(i) {
        if (typeof onOptionSelect === 'function') onOptionSelect(i);
        setOptionsMenuOpen(false);
        setActiveOptionIndex(i);
    }

    return ( 
        <div className={"GenericDropdown" + (className? ' ' + className : '') + (optionsMenuOpen? ' active' : '')}>
            <button className="selector" onClick={toggleOptionsMenu}>
                {options[activeOptionIndex]}
            </button>
            <div className="options">
                {options.map((o, i) => {
                    return ( 
                        <button 
                            className="option" 
                            onClick={() => clickOption(i)}
                            tabIndex={optionsMenuOpen? 0 : -1}
                        >{o}</button> 
                    )
                })}
            </div>
        </div>
     );
}

export default GenericDropdown;