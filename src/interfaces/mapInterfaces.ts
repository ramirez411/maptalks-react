import * as maptalks from 'maptalks'

export interface MapOptions {
    center : number[],
    zoom : number,
    baseLayer : maptalks.TileLayer
}

export interface MapContextProps {
    map : maptalks.Map,
    setMap : (map : maptalks.Map) =>  void
 }


export interface ImageSymbolOptions {
    markerFile   : string,
    markerWidth  : number,
    markerHeight : number,
    markerDx?     : number,
    markerDy?     : number,
    markerOpacity?: number
}

export interface GeometrySymbolOptions {
    markerType: string,
    markerFill: string,
    markerFillOpacity?: number,
    markerLineColor: string,
    markerLineWidth: number,
    markerLineOpacity?: number,
    markerLineDasharray?:[],
    markerWidth:number,
    markerHeight:number,
    markerDx?: number,
    markerDy?: number,
    markerOpacity? : number
}
