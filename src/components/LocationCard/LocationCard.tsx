import React from "react";
import { Card } from "antd";

interface IProps {
  selectedRestaurant:any;
}

const LocationCard: React.FC<IProps> = ({ selectedRestaurant }) => {
  return (
    <Card
      title={selectedRestaurant.title}
      style={{
        width: "100%",
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      }}
    >
      <p>{selectedRestaurant.address.label}</p>
      <p>Position:{Object.values(selectedRestaurant.position).join(",")}</p>
    </Card>
  );
};

export default LocationCard;