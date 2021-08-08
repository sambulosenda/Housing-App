import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewPort, setViewport] = useState({
        width: '100%', 
        height: "100%",
        latitude: 37.7577, 
        longitude: -122.4376, 
        zoom: 11
    })

    return (
        <ReactMapGL
        mapStyle="mapbox://styles/sambulosenda/cks37941y3g2717q6ler1mpkc"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewPort}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

        </ReactMapGL>
    )
}

export default Map
