import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/container/index";
import SearchForm from "../components/searchForm/SearchForm";
import SearchResults from "../components/searchResults/index";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all employees and update this.state.employees
  componentDidMount() {
    API.search()
      .then(res => {
      this.setState({employees: res.data.results, results: res.data.results})})
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let searchResults = this.state.employees.filter(employees => {
      let employeeFullName = (employees.name.first + " " + employees.name.last).toLowerCase()
      if (employeeFullName.includes(this.state.search.toLowerCase())){
        return true
      } 
      else{
        return false
      }
    })
    this.setState({results: searchResults})
  };

  handleClear = event => {
    event.preventDefault();
    this.setState({results: this.state.employees})
  }
  
  render() {
    return (
      <div>
        {console.log("CHECK THIS ONE", this.state.employees)}
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Search</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;