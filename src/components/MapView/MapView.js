import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import {useGeographic} from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import {Circle, Fill, Style} from 'ol/style';
import {defaults as defaultControls} from 'ol/control';

const MapView = ({coords}) => {
  useGeographic();
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
      const point = new Point(coords);

      const initialMap = new Map({
        target: mapElement.current,
          layers: [
              new TileLayer({
                  source: new OSM(),
              }),
              new VectorLayer({
                source: new VectorSource({
                  features: [new Feature(point)]
                }),
                style: new Style({
                  image: new Circle({
                    radius: 15,
                    fill: new Fill({color: '#01d3b7'}),
                  }),
                }),
              })
          ],
          view: new View({
              center: coords,
              zoom: 17,
          }),
          controls: defaultControls({attribution: false })
      });
      setMap(initialMap);
  }, []);

  return (
    <div style={{height:'500px',width:'100%'}} ref={mapElement} className="map-container" />
  );
}

export default MapView;