import { useState, useEffect } from "react";
import * as BreakpointHandling from './breakpointHandling';

/**
 * React component designed to wrap other components that may need hiding at certain CSS breakpoints.
 * 
 * @param {String|Number|Undefined} min the minimum width breakpoint value the children should be visible at (inclusive)
 * @param {String|Number|Undefined} max the maximum width breakpoint value the children should be visible at (inclusive)
 * @param {String|Number|Undefined} minHeight the minimum height breakpoint value the children should be visible at (inclusive)
 * @param {String|Number|Undefined} maxHeight the maximum height breakpoint value the children should be visible at (inclusive)
 * @param {JSXElement} children the element to toggle
 * @param {Function} onShow a function to execute when the children are rendered
 * @param {Function} onHide a function to execute when the children are not rendered
 */
function ShowAtBreakpoint({min, max, minHeight, maxHeight, children, onShow, onHide}) {
    
    const [ wBreakpoint, setWBreakpoint ] = useState(BreakpointHandling.getBreakpoint(false));
    const [ hBreakpoint, setHBreakpoint ] = useState(BreakpointHandling.getBreakpoint(true));
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            let bw = BreakpointHandling.getBreakpoint(false);
            let bh = BreakpointHandling.getBreakpoint(true);
            if (wBreakpoint !== bw) setWBreakpoint(bw);
            if (hBreakpoint !== bh) setHBreakpoint(bh);
        });
    });
    

    if (
        BreakpointHandling.shouldRender(wBreakpoint, min, max, false) &&
        BreakpointHandling.shouldRender(hBreakpoint, minHeight, maxHeight, true)
    ) {
        onShow && onShow();
        return children;
    } 
    else {
        onHide && onHide();
        return null;
    } 
}

export default ShowAtBreakpoint;