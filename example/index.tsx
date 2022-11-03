import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as maptalks from 'maptalks'
import {
    MapContextComponent,
    MapComponent,
    MarkerComponent,
    PointVectorLayer,
    LineVectorLayer,
    PolygonVectorLayer, MapOptions, MarkerOptions,
} from '../.';
import {useEffect, useState} from "react";
import logo from '../dist/assets/logo.png';
import {markers as myMarkers, lineLayer, pointLayer, polygonLayer} from '../dist/assets/dataExample'

function App() {

    const [mapOptions, setMapOptions] = useState<MapOptions>()
    const [markers, setMarker] = useState<MarkerOptions[]>([] )
    const [map, setMap] = useState<maptalks.Map>()

    useEffect(() => {
        setMapOptions({
            center : [-76.4, 3.4],
            zoom : 17,
            baseLayer : new maptalks.TileLayer('base', {
                urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                subdomains: ["a","b","c","d"],
                attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            })
        })
    }, [])

    useEffect(()=> {
        map && console.log('se ha obtenido el mapa: ', map)
    }, [map])

    const onClickSetLocation = () =>{
        if(map && map.options){
            map.panTo(
                new maptalks.Coordinate(-76.4 + Math.random()*0.05, 3.4+ Math.random()*0.05),
                {
                    animation: true,
                    duration : 600
                }
            )
        }
    }

    const addMarkers = () => {
        setMarker(myMarkers)
    }

    const getMap = (map : maptalks.Map) => {
        setMap(map)
    }

    return (
        <MapContextComponent>
            <div className="mapContainer" >
                <button
                    onClick={onClickSetLocation}
                >relocate map</button>
                <button
                    onClick={addMarkers}
                >add geometry</button>
                <button
                    onClick={addMarkers}
                >add geometry</button>
                <MapComponent
                    mapOptions={mapOptions}
                    className = "map"
                    getMap={getMap}
                >
                    <>
                        {
                            markers.length > 0 &&
                            markers.map(marker => <MarkerComponent
                                key = {marker.id}
                                id={marker.id}
                                coordinates={marker.coordinates}
                                geometrySymbolOptions={marker.geometrySymbolOptions}
                                imageSymbolOptions={marker.imageSymbolOptions}
                            />)
                        }
                    </>
                    <PointVectorLayer
                        points={pointLayer}
                        styles={{
                            markerFile   : logo,
                            markerWidth  : 50,
                            markerHeight : 50
                        }} idLayer="example"/>
                    <LineVectorLayer
                        lines={lineLayer}
                        styles={{
                            markerFile   : logo,
                            markerWidth  : 50,
                            markerHeight : 50
                        }} idLayer="example2"/>
                    <PolygonVectorLayer
                        polygons={polygonLayer}
                        styles={{
                            markerFile   : logo,
                            markerWidth  : 50,
                            markerHeight : 50
                        }} idLayer="example3"/>
                </MapComponent>
            </div>
        </MapContextComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
