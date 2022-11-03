import React, {useContext, useEffect} from 'react';
import * as maptalks from "maptalks";
import {mapContext} from "../context/MapcontextComponent";
import {
    GeometrySymbolOptions,
    ImageSymbolOptions,
    Feature,
    FeatureCollection,
    Geometry} from "../interfaces";

export interface PolygonVectorLayerProps {
    polygons : Geometry | Feature | FeatureCollection,
    styles : GeometrySymbolOptions | ImageSymbolOptions,
    idLayer: string
}

export const PolygonVectorLayer = ({polygons, idLayer} : PolygonVectorLayerProps) => {

    const {map} = useContext(mapContext)

    useEffect(()=> {
        if(map && map.id){
            if(!map.getLayer(idLayer)){
                console.log(map)
                let geometry = maptalks.Geometry.fromJSON((polygons))
                let polygonVectorLayer = new maptalks.VectorLayer(idLayer, geometry)
                map.addLayer(polygonVectorLayer)
            }
        }
    }, [polygons, map])

    return (
        <></>
    )
}

export default PolygonVectorLayer
