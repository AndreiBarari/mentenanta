import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWp5YW5rZWUiLCJhIjoiY2xpOHRjb2h3Mjl6YTNlbzN6bzV0enRhNSJ9.ElP75xgBfyH92YE8gWgIOw";

export const Map = () => {
  const [viewState, setViewState] = useState({
    width: "auto",
    height: "auto",
    latitude: 46.7712,
    longitude: 23.59,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
};
