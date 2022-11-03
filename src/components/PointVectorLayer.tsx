import React, {useContext, useEffect} from 'react';
import * as maptalks from "maptalks";
import {mapContext} from "../context/MapcontextComponent";
import {
    GeometrySymbolOptions,
    ImageSymbolOptions,
    Feature,
    FeatureCollection,
    Geometry} from "../interfaces";

export interface PointVectorLayerProps {
    points : Geometry | Feature | FeatureCollection,
    styles : GeometrySymbolOptions | ImageSymbolOptions,
    idLayer: string
}

export const PointVectorLayer = ({points, idLayer} : PointVectorLayerProps) => {

    const {map} = useContext(mapContext)

    useEffect(()=> {
        if(map && map.options){
            map.getLayer(idLayer) && map.removeLayer(idLayer)
            let geometry = maptalks.Geometry.fromJSON((points))
            let pointVectorLayer = new maptalks.VectorLayer(idLayer, geometry)
            map.addLayer(pointVectorLayer)
        }
    }, [points, map])

    return (
        <></>
    )
}

export default PointVectorLayer
