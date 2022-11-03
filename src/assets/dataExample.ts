import {FeatureCollection} from "../interfaces/geojsonInterfaces";
import {MarkerOptions} from "../components/MarkerComponent";
import logo from "./logo.png";

export const pointLayer : FeatureCollection = {
    type: "FeatureCollection",
    id : "points_1",
    features : [
        {
            type: "Feature",
            id: "1",
            geometry: {
                type: "Point",
                coordinates: [-76.401, 3.4]
            },
            properties: {"prop0": "value0"}
        },
        {
            type: "Feature",
            id: "2",
            geometry: {
                type: "Point",
                coordinates: [-76.402, 3.4]
            },
            properties: {"prop0": "value0"}
        },
        {
            type: "Feature",
            id: "3",
            geometry: {
                type: "Point",
                coordinates: [-76.403, 3.4]
            },
            properties: {"prop0": "value0"}
        },
    ]
};

export const markers: MarkerOptions[] = [
    {
        id : '1-markers',
        coordinates : [-76.4, 3.4]
    },
    {
        id : '2-markers',
        coordinates : [-76.45, 3.45],
        geometrySymbolOptions : {
            'markerType': 'diamond',
            'markerFill': 'rgb(135,196,240)',
            'markerFillOpacity': 1,
            'markerLineColor': '#34495e',
            'markerLineWidth': 3,
            'markerLineOpacity': 1,
            'markerLineDasharray':[],
            'markerWidth': 40,
            'markerHeight': 40,
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity' : 1
        }
    },
    {
        id : '3-markers',
        coordinates : [-76.454, 3.454],
        imageSymbolOptions : {
            markerFile   : logo,
            markerWidth  : 50,
            markerHeight : 50
        }
    }
]


export const lineLayer : FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        -76.45364630159209,
                        3.429988401617109
                    ],
                    [
                        -76.44856500814491,
                        3.4170542269857407
                    ],
                    [
                        -76.44449997338691,
                        3.4195058159811254
                    ],
                    [
                        -76.4413665090944,
                        3.4159552367825654
                    ]
                ],
                "type": "LineString"
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        -76.45271473112662,
                        3.4413162278260074
                    ],
                    [
                        -76.44094306797375,
                        3.4250007340548336
                    ]
                ],
                "type": "LineString"
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        -76.45661038943634,
                        3.4430914719764587
                    ],
                    [
                        -76.43526895695763,
                        3.446134739963526
                    ]
                ],
                "type": "LineString"
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        -76.4389952388191,
                        3.4351451152943326
                    ],
                    [
                        -76.43560770985418,
                        3.4198439656946533
                    ]
                ],
                "type": "LineString"
            }
        }
    ]
}

export const polygonLayer : FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -76.44926647650763,
                            3.429968570801151
                        ],
                        [
                            -76.44524506591338,
                            3.429968570801151
                        ],
                        [
                            -76.44524506591338,
                            3.431829701290553
                        ],
                        [
                            -76.44926647650763,
                            3.431829701290553
                        ],
                        [
                            -76.44926647650763,
                            3.429968570801151
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -76.44356338511965,
                            3.434274710345804
                        ],
                        [
                            -76.44367305995421,
                            3.4320486575808786
                        ],
                        [
                            -76.44001723214093,
                            3.427742508005707
                        ],
                        [
                            -76.43855490101636,
                            3.432486570010113
                        ],
                        [
                            -76.44356338511965,
                            3.434274710345804
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -76.45036322485126,
                            3.4265747352870477
                        ],
                        [
                            -76.45018043346076,
                            3.419568069066017
                        ],
                        [
                            -76.44184514604795,
                            3.4229619294168003
                        ],
                        [
                            -76.44506227452291,
                            3.429092743434339
                        ],
                        [
                            -76.45036322485126,
                            3.4265747352870477
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}