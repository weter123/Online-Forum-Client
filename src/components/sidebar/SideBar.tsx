import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
const SideBar = () => {
    const {width} = useWindowDimensions();
    if(width <= 768){
        return null;
    }
    return <div className='sidebar'>SideBar</div>;
}

export default SideBar;