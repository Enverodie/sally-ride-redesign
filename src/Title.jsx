import { useId } from "react";

/**
 * This title component is meant to represent the title
 * of the content in the corresponding route
 */
function Title({children}) {

    const filterId = useId();

    return ( 
        <div className="title">
            <svg style={{visibility: 'hidden', position: 'absolute', width: '0px', height: '0px'}}>
                <defs>
                    <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                        <feMorphology operator="dilate" radius="2 2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology2"/>
                        <feGaussianBlur stdDeviation="3.5 3.5" x="0%" y="0%" width="100%" height="100%" in="morphology2" edgeMode="none" result="blur1"/>
                        <feMerge x="0%" y="0%" width="100%" height="100%" result="merge">
                            <feMergeNode in="morphology2"/>
                            <feMergeNode in="blur1"/>
                        </feMerge>
                        <feMorphology operator="erode" radius="1 1" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology1"/>
                        <feComposite in="merge" in2="morphology1" operator="out" x="0%" y="0%" width="100%" height="100%" result="composite2"/>
                    </filter>
                </defs>
            </svg>
            <h1 className="title" style={{filter: 'url(#'+filterId+')'}}>
                {children}
            </h1>
        </div>
     );
}

export default Title;