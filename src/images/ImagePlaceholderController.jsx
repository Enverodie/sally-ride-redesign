import { useState, useEffect } from "react";
import ImagePlaceholderComplex from "./ImagePlaceholderComplex";
import ImagePlaceholderSimple from "./ImagePlaceholderSimple";
import PlaceholderImg1 from './index_images/sr1.jpg';
import ShowAtBreakpoint from "../ShowAtBreakpoint";

function ImagePlaceholderController({src, alt, width, height, rotation, children}) {

    // default values
    src = PlaceholderImg1;
    alt = alt || "";
    width = width || "85%";
    height = height || "75%";
    rotation = rotation || "-7deg";
    children = children || "Sample description";

    return (
        <>
            <ShowAtBreakpoint min={"Tablet"} max={"Tablet"}>
                <ImagePlaceholderSimple src={src} alt={alt} width={width} height={height} rotation={rotation}>{children}</ImagePlaceholderSimple>
            </ShowAtBreakpoint>
            <ShowAtBreakpoint min={"Desktop"} max={"Desktop"}>
                <ImagePlaceholderComplex src={src} alt={alt} width={width} height={height} rotation={rotation}>{children}</ImagePlaceholderComplex>
            </ShowAtBreakpoint>
        </>
    );
}

export default ImagePlaceholderController;