import React, {useContext, useEffect} from 'react';
import {mapContext} from "../context/MapcontextComponent";
import * as maptalks from 'maptalks'
import {GeometrySymbolOptions, ImageSymbolOptions} from "../interfaces";

export interface MarkerOptions {
    id : string
    coordinates : number[],
    geometrySymbolOptions? : GeometrySymbolOptions,
    imageSymbolOptions?: ImageSymbolOptions
}

export const MarkerComponent = ({id, coordinates, geometrySymbolOptions, imageSymbolOptions}: MarkerOptions) => {

    const {map} = useContext(mapContext)

    useEffect(()=>{
        if(map && map.options){
            map.getLayer(id) && map.removeLayer(id)

            let marker = new maptalks.Marker(coordinates)
            marker.setSymbol({
                markerType : 'ellipse',
                markerWidth : 20,
                markerHeight : 30
            })
            if(geometrySymbolOptions){
                marker.updateSymbol(geometrySymbolOptions)
            }else if(imageSymbolOptions){
                marker.updateSymbol(imageSymbolOptions)
            }
            let layer = new maptalks.VectorLayer(id, [marker])
            map.addLayer(layer)

            console.log('marker', id, map)
        }
    }, [map, coordinates])


    return (
         <></>
    );
};

export default MarkerComponent;
