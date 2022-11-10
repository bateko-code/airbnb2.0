import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapBox({ searchResults }: any) {
  const [selectedLocation, setSelectedLocation]: any = useState({});
  // Transform the search results object into the  lat long object required
  const coordinates: any = searchResults?.map(
    (result: any): { longitude: number; latitude: number } => ({
      longitude: result.long,
      latitude: result.lat,
    })
  );
  // The latitude and longitude of the center of locations coordinates

  const center: any = getCenter(coordinates);
  interface IViewport {
    width: string;
    height: string;
    latitude: number;
    longitude: number;
    zoom: number;
  }
  const [viewport, setViewport]: any = useState<IViewport>({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  useEffect(() => {
    setViewport({
      width: "100%",
      height: "100%",
      latitude: center?.latitude,
      longitude: center?.longitude,
      zoom: 11,
    });
  }, [searchResults]);
  return (
    <Map
      mapStyle="mapbox://styles/tekocode4/cla3lpk4u003v15nxnkjzy93r"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt: any) => setViewport(evt.Viewport)}
    >
      {searchResults.map(
        (result: { img: string; long: number; lat: number; title: string }) => (
          <div key={result.long}>
            <Marker longitude={result.long} latitude={result.lat}>
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📍
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                className="text-xl"
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
                <img width="100%" src={result.img} alt="picture of home" />
              </Popup>
            ) : (
              false
            )}
          </div>
        )
      )}
    </Map>
  );
}

export default MapBox;
