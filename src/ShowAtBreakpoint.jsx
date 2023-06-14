import { useState, useEffect } from "react";

/**
 * React component designed to wrap other components that may need hiding at certain CSS breakpoints.
 * 
 * @param {String|Number|Undefined} min the minimum breakpoint value the children should be visible at (inclusive)
 * @param {String|Number|Undefined} max the maximum breakpoint value the children should be visible at (inclusive)
 * @param {JSXElement} children the element to toggle
 */
function ShowAtBreakpoint({min, max, children}) {
    
    const [ breakpoint, setBreakpoint ] = useState(getBreakpoint());
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            let b = getBreakpoint();
            if (breakpoint !== b) setBreakpoint(b);
        });
    });
    

    if (shouldRender(breakpoint, min, max)) return children;
    else return null;
}

// Ideally these breakpoints correspond to _breakpoints.scss
const RELEVANT_BREAKPOINTS = {
    MOBILE: 0,
    TABLET: 600,
    DESKTOP: 1000,
}

// gets the number representing the breakpoint number (0-based) in the order RELEVANT_BREAKPOINTS lists them
function getBreakpoint() {
    let breakpointIndices = Object.keys(RELEVANT_BREAKPOINTS);
    for (let i = breakpointIndices.length-1; i >= 0; i--) {
        if (window.matchMedia(`(min-width: ${ RELEVANT_BREAKPOINTS[breakpointIndices[i]] }px)`).matches) return i;
    }
    return -1;
}

// accepts a string representing the key in RELEVANT_BREAKPOINTS and should be used to sort through min and max props
function convertToBreakpointNumber(bp) {
    if (typeof bp === "string") {
        let index = Object.keys(RELEVANT_BREAKPOINTS).findIndex(item => item.toLowerCase() === bp.toLowerCase());
        if (index < 0) throw new SyntaxError(`key ${bp} is not a valid breakpoint name`);
        return index;
    }
    else if (typeof bp === "number") {
        return bp;
    }
    else if (typeof bp === "undefined") {
        return null;
    }
    else throw new SyntaxError(`${bp} must have type string or number`);
}

function shouldRender(breakpointNumber, minBreakpoint, maxBreakpoint) {
    minBreakpoint = convertToBreakpointNumber(minBreakpoint);
    maxBreakpoint = convertToBreakpointNumber(maxBreakpoint);
    if (minBreakpoint && breakpointNumber < minBreakpoint) return false;
    if (maxBreakpoint && breakpointNumber > maxBreakpoint) return false;
    return true;
}

export default ShowAtBreakpoint;