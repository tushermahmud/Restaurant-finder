import React from "react";
import { Card,Typography } from "antd";

interface IProps {
  selectedRestaurant:any;
}

const {Title} = Typography;
const LocationCard: React.FC<IProps> = ({ selectedRestaurant }) => {
  return (
    <Card
      title={selectedRestaurant.title}
      style={{
        width: "100%",
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      }}
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