import { useState, useEffect, Fragment } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import LocationCard from "../LocationCard/LocationCard";
import MapView from "../Map/MapView";
import LocationAutocomplete from "../LocationAutocomplete/LocationAutocomplete";
import GlobalLoader from "../Common/GlobalLoader";
import { useSelector } from "react-redux";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const MapWrapper: React.FC<any> = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [selectedRestaurantCoord, setSelectedRestaurantcoord] = useState<any>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const mapData = useSelector((state:any)=>state.map)
  useEffect(() => {
    if (mapData.restaurants.length) {
      let randomnumber = Math.floor(
        Math.random() * (mapData.restaurants.length-1)
      );
      setSelectedRestaurant(mapData.restaurants[randomnumber]);
      setSelectedRestaurantcoord([
        mapData.restaurants[randomnumber].position.lat,
        mapData.restaurants[randomnumber].position.lng,
      ]);
    }
  }, [mapData]);

  const handleChange = (searchText: string) => {
    if (searchText !== "") {
      const results = mapData.restaurants.filter((m: any) => {
        let titleAddress = m.title+", "+m.address.label
        return (
          titleAddress.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
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

  return mapData.loading || !selectedRestaurant ? (
    <Row justify="center" align="middle">
      <GlobalLoader />
    </Row>
  ) : (
    <Fragment>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <LocationAutocomplete
                handleSelect={handleSelect}
                handleChange={handleChange}
                searchResults={searchResults.length ? searchResults : []}
              />
            </Col>
            <Col span={24}>
                <LocationCard selectedRestaurant={selectedRestaurant} />
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

export default MapWrapper;
