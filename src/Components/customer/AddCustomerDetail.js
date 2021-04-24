import { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const AddCustomerDetail = () => {
  const customer = {
    customerId: "007",
    firstName: "Vijay",
    lastName: "san",
    gender: "male",
  };
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobileNumber: "",
    email: "",
    buildingName: "",
    area: "",
    gender: "",
    pincode: "",
    validations: { firstName: undefined, age: undefined },
  });
  const response = { customerDetail: customer, error: "" };

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let validationMsg;
    if (name === "firstName") {
      validationMsg = validateName(value);
    }
    if (name === "age") {
      validationMsg = validateAge(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (state.validations.fistName || state.validations.age) {
        return;
      }
    setState({ ...state });
  };
  const validateAge = (age) => {
    if (age <= 0) {
      return "Age cannot be zero or negative";
    }

    if (age > 120) {
      return "Age cannot be greater than 120";
    }

    return undefined;
  };
  const validateName = (name) => {
    if (name.length <= 2) {
      return "name should be of length greater than 2";
    }
    return undefined;
  };

  return (
    <div className="container">
      <h2>Add Customer Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>firstName</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={onHandleChange}
          />
          {state.validations.firstName ? (
            <div>{state.validations.firstName}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>lastName</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            onChange={onHandleChange}
          />
          {state.validations.age ? <div>{state.validations.age}</div> : ""}
        </div>
        <div className="form-group">
          <label>mobileNumber</label>
          <input
            type="tel"
            className="form-control"
            name="mobileNumber"
            minlength="10"
            maxlength="10"
            pattern="[0-9]+" 
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            className="form-control"
            name="pincode"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Area</label>
          <input
            type="text"
            className="form-control"
            name="area"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>BuildingName</label>
          <input
            type="text"
            className="form-control"
            name="buildingName"
            onChange={onHandleChange}
          />
        </div>

        <button>Submit</button>
      </form>

      {response.customerDetail ? (
        <DisplayCustomerDetails customer={response.customerDetail} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddCustomerDetail;
