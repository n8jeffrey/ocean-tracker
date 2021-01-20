import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.species) {
      return (
        <LocationMarker
          lat={ev.latitude}
          lng={ev.longitude}
          onClick={() =>
            setLocationInfo({
              species: ev.species,
              description: ev.description,
              quantity: ev.quantity,
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCg8dSJaO6oFmTlWs1N5lgIqNH8eNUiZsA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />

        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 48.425708,
    lng: -123.276792,
  },
  zoom: 10,
};

export default Map;
