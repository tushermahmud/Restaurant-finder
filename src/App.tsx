import {  useEffect, Fragment } from "react";
import "./App.css";
import {setMapData} from "./redux/actions/MapAction"
import {connect} from "react-redux"
import MapWrapper from "./components/MapWrapper/MapWrapper";

const App: React.FC<any> = ({setMapData}) => {
  useEffect(()=>{
    setMapData();
  },[])

  return (
    <Fragment>
      <MapWrapper/>
    </Fragment>
  );
}

export default connect(null,{setMapData})(App);
