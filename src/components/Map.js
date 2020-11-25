import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCg8dSJaO6oFmTlWs1N5lgIqNH8eNUiZsA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 44.64921,
    lng: -63.57103,
  },
  zoom: 6,
};

export default Map;
