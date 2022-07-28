import {  useEffect, Fragment } from "react";
import "./App.css";
import {setMapData} from "./redux/actions/MapAction"
import {connect} from "react-redux"
import MapWrapper from "./components/MapWrapper/MapWrapper";
import {useDispatch } from "react-redux";

const App: React.FC<any> = () => {
  const dispatch:any = useDispatch();

  useEffect(()=>{
    dispatch(setMapData());
  },[])

  return (
    <Fragment>
      <MapWrapper/>
    </Fragment>
  );
}

export default App;
