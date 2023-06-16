// Ideally these breakpoints correspond to _breakpoints.scss
const RELEVANT_BREAKPOINTS = {
    MOBILE: 0,
    TABLET: 600,
    DESKTOP: 1000,
}

// this is mainly to show what names can be used instead of breakpoint ID numbers
export const BREAKPOINT_NAMES = Object.keys(RELEVANT_BREAKPOINTS);

// gets the number representing the breakpoint number (0-based) in the order RELEVANT_BREAKPOINTS lists them
export function getBreakpoint() {
    for (let i = BREAKPOINT_NAMES.length-1; i >= 0; i--) {
        if (window.matchMedia(`(min-width: ${ RELEVANT_BREAKPOINTS[BREAKPOINT_NAMES[i]] }px)`).matches) return i;
    }
    return -1;
}

// accepts a string representing the key in RELEVANT_BREAKPOINTS and should be used to sort through min and max props
export function convertToBreakpointNumber(bp) {
    if (typeof bp === "string") {
        let index = BREAKPOINT_NAMES.findIndex(item => item.toLowerCase() === bp.toLowerCase());
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

export function shouldRender(breakpointNumber, minBreakpoint, maxBreakpoint) {
    minBreakpoint = convertToBreakpointNumber(minBreakpoint);
    maxBreakpoint = convertToBreakpointNumber(maxBreakpoint);
    if (minBreakpoint !== null && breakpointNumber < minBreakpoint) return false;
    if (maxBreakpoint !== null && breakpointNumber > maxBreakpoint) return false;
    return true;
}