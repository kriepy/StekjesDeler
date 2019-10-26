import * as React from "react";

import image from "./marker_green_black.resized10.png"

class Marker extends React.Component<any, any>{
    render() {
        return (
            <div><img src={image} height="12px"/></div>
        )
    }
}

export default Marker;