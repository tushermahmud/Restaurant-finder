import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Typography } from "antd";

interface IProps {
  selectedRestaurant: any;
  selectedRestaurantCoord:any;
}

const { Title } = Typography;
const MapView: React.FC<IProps> = ({
  selectedRestaurant,
  selectedRestaurantCoord,
}) => {
  return (
    <MapContainer
      center={
        selectedRestaurant ? selectedRestaurantCoord : [23.78033, 90.40714]
      }
      zoom={30}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          selectedRestaurant ? selectedRestaurantCoord : [23.78033, 90.40714]
        }
      >
        <Popup>
          <Title level={4}>
            {selectedRestaurant ? selectedRestaurant.title : ""}
          </Title>

          <h4>{selectedRestaurant ? selectedRestaurant.address.label : ""}</h4>
          <span>
            Type:{" "}
            {selectedRestaurant ? selectedRestaurant.categories[0].name : ""}
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;