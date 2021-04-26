import AddCategory from "../components/category/AddCategory";
import { Route, Switch } from "react-router-dom";
import UpdateCategory from "../components/category/UpdateCategory";
import ViewAllCategory from "../components/category/ViewAllCategory";
import ViewCategory from "../components/category/ViewCategory";
import './page.css';

const CategoryPage = (props) => {
    return ( 
      <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Add</button>
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/update`)}>Update</button>
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button>
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewAll`)}>ViewAll</button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/add`}
                component={AddCategory}
              />
              <Route
                exact
                path={`${props.match.url}/update`}
                component={UpdateCategory}
              />
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewCategory}
              />
              <Route
                exact
                path={`${props.match.url}/viewAll`}
                component={ViewAllCategory}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default CategoryPage;