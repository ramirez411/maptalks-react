import React, {createContext, ReactElement, useState} from "react";
import {MapContextProps} from "../interfaces/mapInterfaces";
import * as maptalks from "maptalks";


export const mapContext = createContext({} as MapContextProps);


export const MapContextComponent = ({children} : {children? : ReactElement | ReactElement[]}) => {

    const [map, setMap] = useState({} as maptalks.Map)

    const mapContextValue : MapContextProps = {
        map : map,
        setMap : setMap,
    }

    return (
        <mapContext.Provider value = {mapContextValue}>
            {children}
        </mapContext.Provider>
    )
}



