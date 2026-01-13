'use-client'

import { MapContainer, Marker, Popup, TileLayer, Tooltip  } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap() {

  return <MapContainer className="map" center={[3.22855, -76.56050]} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[3.22855, -76.56050]}>
      <Popup>
        <a href="https://maps.app.goo.gl/ft2odsVNmyqZwYpU7">Hacienda Lagos De Veracruz</a> <br /> 
      </Popup>
    </Marker>
  </MapContainer>
}