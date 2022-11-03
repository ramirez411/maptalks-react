import React, {useContext, useEffect} from 'react';
import * as maptalks from "maptalks";
import {mapContext} from "../context/MapcontextComponent";
import {
    GeometrySymbolOptions,
    ImageSymbolOptions,
    Feature,
    FeatureCollection,
    Geometry} from "../interfaces";


export interface LineVectorLayerProps {
    lines : Geometry | Feature | FeatureCollection,
    styles : GeometrySymbolOptions | ImageSymbolOptions,
    idLayer: string
}

export const LineVectorLayer = ({lines, idLayer} : LineVectorLayerProps) => {

    const {map} = useContext(mapContext)

    useEffect(()=> {
        if(map && map.id){
            if(!map.getLayer(idLayer)){
                console.log(map)
                let geometry = maptalks.Geometry.fromJSON((lines))
                let lineVectorLayer = new maptalks.VectorLayer(idLayer, geometry)
                map.addLayer(lineVectorLayer)
            }
        }
    }, [lines, map])

    return (
        <></>
    )
}

export default LineVectorLayer
