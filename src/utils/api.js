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
    getEmployeeById: function() {
      return axios.get("https://my-json-server.typicode.com/merkraith/AvengersRoster/db");
    }
  
  };
  