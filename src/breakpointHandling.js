// Ideally these breakpoints correspond to _widthBreakpoints.scss
const WIDTH_BREAKPOINTS = {
    MOBILE: 0,
    TABLET: 600,
    DESKTOP: 1000,
}

const HEIGHT_BREAKPOINTS = {
    NARROW: 0,
    SMALL: 600,
    AVERAGE: 800,
}

// this is mainly to show what names can be used instead of breakpoint ID numbers
export const W_BREAKPOINT_NAMES = Object.keys(WIDTH_BREAKPOINTS);
export const H_BREAKPOINT_NAMES = Object.keys(HEIGHT_BREAKPOINTS);

// gets the number representing the breakpoint number (0-based) in the order WIDTH_BREAKPOINTS lists them
export function getBreakpoint(useHeight) {
    let names = useHeight?  H_BREAKPOINT_NAMES : W_BREAKPOINT_NAMES;
    let breakpoints = useHeight?  HEIGHT_BREAKPOINTS : WIDTH_BREAKPOINTS;
    let cssDimension = useHeight? 'height' : 'width';

    for (let i = names.length-1; i >= 0; i--) {
        if (window.matchMedia(`(min-${cssDimension}: ${ breakpoints[names[i]] }px)`).matches) return i;
    }
    return -1;
}

// accepts a string representing the key in WIDTH_BREAKPOINTS and should be used to sort through min and max props
export function convertToBreakpointNumber(bp, useHeight) {
    let names = useHeight?  H_BREAKPOINT_NAMES : W_BREAKPOINT_NAMES;
    if (typeof bp === "string") {
        let index = names.findIndex(item => item.toLowerCase() === bp.toLowerCase());
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

export function shouldRender(breakpointNumber, minBreakpoint, maxBreakpoint, useHeight) {
    minBreakpoint = convertToBreakpointNumber(minBreakpoint, useHeight);
    maxBreakpoint = convertToBreakpointNumber(maxBreakpoint, useHeight);
    if (minBreakpoint !== null && breakpointNumber < minBreakpoint) return false;
    if (maxBreakpoint !== null && breakpointNumber > maxBreakpoint) return false;
    return true;
}