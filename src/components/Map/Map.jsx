import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Mapp(){
    return (
        <MapContainer 
            center = {[-30, -140]}
            zoom = {2} 
            scrollWheelZoom = {false}
            className = 'map'
            >
            
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position = {[-30, -140]}>
                <Popup>
                    <label>Yeah, our drinks are made at the deep ocean.</label>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Mapp