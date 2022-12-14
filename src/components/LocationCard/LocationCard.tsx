import React from "react";
import { Card,Typography } from "antd";
import "./locationCard.scss"
interface IProps {
  selectedRestaurant:any;
}

const {Title} = Typography;
const LocationCard: React.FC<IProps> = ({ selectedRestaurant }) => {
  return (
    <Card
      title={selectedRestaurant.title}
      className="location-card"
    >
      <Title level={5}>{selectedRestaurant.address.label}</Title>
      <Title level={5}>
        Position:
        {`${selectedRestaurant.position.lat}, ${selectedRestaurant.position.lng} `}
      </Title>
      <Title level={5}>
        Distance: {`${selectedRestaurant.distance / 1000}KM`}
      </Title>
    </Card>
  );
};

export default LocationCard;