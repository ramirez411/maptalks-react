import React, { ReactElement, useEffect, useRef, useContext} from 'react';
import * as maptalks from 'maptalks'
import {mapContext} from "../context/MapcontextComponent";
import {MapOptions} from "../interfaces";



export interface MapProps {
    children : ReactElement | ReactElement[],
    mapOptions : MapOptions | undefined,
    className? : string
    getMap? : (map: maptalks.Map) => void
}

export const MapComponent = ({children, mapOptions, className, getMap} : MapProps) => {

    let mapContainerEl = useRef(null);
    const {map, setMap} = useContext(mapContext)

    useEffect(() => {
        if (map && map.options){
            mapOptions && map.setOptions(mapOptions)
        }else {
            if(mapOptions){
                let mapInstance = new maptalks.Map('mapContainer', mapOptions!)
                mapOptions && setMap(mapInstance)
                getMap && getMap(mapInstance)
            }
        }
        return(()=>{
               map && map.id && map.remove()
        })
    }, [mapOptions])

    return (
            <>
                <div id = "mapContainer" ref = {mapContainerEl} className={className}></div>
                {children}
            </>
    );
};

export default MapComponent;
