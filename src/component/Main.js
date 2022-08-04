import React, {useState} from "react";
import  ColorSchemesExample from "./navbar";
import './style.css';

const Main=() =>{
    //  const [menuData, setMenuData]= useState(Menu);
    return(
        <>
            < ColorSchemesExample/>
            {/* <div className="cards">
                < BasicExample menuData={menuData}/>
            </div> */}
        </>
    );
};
export default Main;