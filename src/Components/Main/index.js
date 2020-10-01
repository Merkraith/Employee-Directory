import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import API from "../../utils/api";
import EmployeeSearchForm from '../EmployeeSearchForm';
import EmployeeSearchResults from '../EmployeeSearchResults';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            sortAvenger: "desc",
            results: [],
            employees: [],
            filtered: [],
            error: null
        };

    }

    componentDidMount() {
        API.searchForm()
            .then(res => this.setState({ employees: res.data.results, filtered: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let currentList = [];
        let newList = [];

        if (event.target.value !== "") {
            currentList = this.state.employees;

            newList = currentList.filter(employee => {
                const lc = employee.name.first.toLowerCase();
                const filter = event.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.state.employees;
        }
        this.setState({
            filtered: newList
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchForm(this.state.search);
    }

    onSort = sortAvenger => {
        this.setState({ sortAvenger })
    }

    onChange = e => {
        this.setState({ search: e.target.value });
    }

    render() {
        const { employees, sortAvenger } = this.state;
        const sorted = employees.sort((a, b) => {
            const isReversed = (sortAvenger === 'asc') ? 1 : -1;
            return isReversed * a.name.first.localeCompare(b.name.first)
        });

        
        return (
            <div>
                <EmployeeSearchForm
                    employees={this.state.employees}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeSearchResults
                    employees={this.state.filtered}
                    onSort={this.onSort}
                    sortType={sorted}
                />
            </div>
        );
    }
}

export default Main;