import { useState, useEffect } from "react";
import * as BreakpointHandling from './breakpointHandling';

/**
 * React component designed to wrap other components that may need hiding at certain CSS breakpoints.
 * 
 * @param {String|Number|Undefined} min the minimum breakpoint value the children should be visible at (inclusive)
 * @param {String|Number|Undefined} max the maximum breakpoint value the children should be visible at (inclusive)
 * @param {JSXElement} children the element to toggle
 * @param {Function} onShow a function to execute when the children are rendered
 * @param {Function} onHide a function to execute when the children are not rendered
 */
function ShowAtBreakpoint({min, max, children, onShow, onHide}) {
    
    const [ breakpoint, setBreakpoint ] = useState(BreakpointHandling.getBreakpoint());
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            let b = BreakpointHandling.getBreakpoint();
            if (breakpoint !== b) setBreakpoint(b);
        });
    });
    

    if (BreakpointHandling.shouldRender(breakpoint, min, max)) {
        onShow && onShow();
        return children;
    } 
    else {
        onHide && onHide();
        return null;
    } 
}

export default ShowAtBreakpoint;