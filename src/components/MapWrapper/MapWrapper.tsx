import { useState, useEffect, Fragment } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import LocationCard from "../LocationCard/LocationCard";
import { Alert, Spin } from "antd";
import { connect } from "react-redux";
import MapView from "../Map/MapView";
import LocationAutocomplete from "../LocationAutocomplete/LocationAutocomplete";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const MapWrapper: React.FC<any> = ({ mapData }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [selectedRestaurantCoord, setSelectedRestaurantcoord] = useState<any>([
    23.78033, 90.40714,
  ]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (mapData.restaurants.length) {
      setSelectedRestaurant(
        mapData.restaurants[
          Math.floor(Math.random() * mapData.restaurants.length-1)
        ]
      );
      setSelectedRestaurantcoord(
        Object.values(mapData.restaurants[1].position)
      );
    }
  }, [mapData, setSelectedRestaurant]);

  const handleChange = (searchText: string) => {
    if (searchText !== "") {
      const results = mapData.restaurants.filter((m: any) => {
        return (
          m.title.includes(searchText) || m.address.label.includes(searchText)
        );
      });
      setSearchResults(results);
    }
  };

  const handleSelect = (data: string) => {
    let selectedData = searchResults.find(
      (result) => (result.title+","+result.address.label).toString() === data.toString()
    );
    setSelectedRestaurant(selectedData);
    setSelectedRestaurantcoord(Object.values(selectedData.position));
  };

  return mapData.loading ? (
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  ) : (
    <Fragment>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <LocationAutocomplete
                handleSelect={handleSelect}
                handleChange={handleChange}
                searchResults={searchResults}
              />
            </Col>
            <Col span={24}>
              {selectedRestaurant ? (
                <LocationCard selectedRestaurant={selectedRestaurant} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <MapView
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantCoord={selectedRestaurantCoord}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  mapData: state.map,
});
export default connect(mapStateToProps, null)(MapWrapper);
