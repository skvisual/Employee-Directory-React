import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <br></br>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type employee name"
          id="employee"
        />
        <datalist id="employees">
          {props.employees && props.employees.map((employee, index) => (
            <option value={employee.name.first + " " + employee.name.last} key={index} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
        <button type="submit" onClick={props.handleClear} className="btn btn-success">
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchForm;