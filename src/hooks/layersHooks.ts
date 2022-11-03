import * as maptalks from "maptalks";
import {useState} from "react";

export const addVectorLayerHook = (vectorLayer : maptalks.VectorLayer) => {
    const [vectorLayers, setVectorLayer] = useState([] as maptalks.VectorLayer [])

    const addVectorLayer = (vectorLayer : maptalks.VectorLayer) => {
        vectorLayers.push(vectorLayer)
    }

    return {
        vectorLayers,
        addVectorLayer
    }
}