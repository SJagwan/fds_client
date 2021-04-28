import {  Route, Switch } from "react-router-dom";
import ViewBillByDate from "../components/bill/ViewBillByDate";
import ViewBillById from "../components/bill/ViewBillById";
import './page.css';

const BillPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>ViewById</button>
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewByDate`)}>ViewBydate</button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewBillById}
              />
              <Route
                exact
                path={`${props.match.url}/viewByDate`}
                component={ViewBillByDate}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    // <div>

    //         <ViewBillById/>
    //         <ViewBillByDate/>

    // </div>
  );
};

export default BillPage;
