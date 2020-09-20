import axios from "axios";

export default {
    searchEmployees: function() {
      return axios.get("https://my-json-server.typicode.com/merkraith/AvengersRoster/db")
    },
    searchForm: function() {
      return axios.get("https://my-json-server.typicode.com/merkraith/AvengersRoster/db")
    },
    getEmployeeByName: function() {
      return axios.get("https://my-json-server.typicode.com/merkraith/AvengersRoster/db");
    },
    // Need to put in correct address to search by employee id
    getEmployeeById: function() {
      return axios.get("https://my-json-server.typicode.com/merkraith/AvengersRoster/db");
    }
  
  };
  