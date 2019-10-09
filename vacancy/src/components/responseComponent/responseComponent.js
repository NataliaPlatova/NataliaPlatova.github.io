import React from 'react';
import VacancyList from "../vacancyList/vacancyList";
import Filter from "../filter/filter";

class ResponseComponent extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     queryParams: '',
        //     wordQuery: ''
        // }
        this.makeRequest = this.makeRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.makeRequest('','');
    }

    handleChange(list) {
        this.props.onChange(list);
    }

    makeRequest(newQueryParams, newWordQuery) {
        const xhr = new XMLHttpRequest();
        const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';
        // let endpoint =`${url}${this.state.queryParams}${this.state.wordQuery}`;
        let endpoint =`${url}${newQueryParams}${newWordQuery}`;

        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if(xhr.readyState===XMLHttpRequest.DONE) {
                this.handleChange(xhr.response);
            }
        };

        xhr.open('GET', endpoint, true);
        xhr.send();

        // this.setState({
        //     queryParams: newQueryParams,
        //     wordQuery: newWordQuery
        // });
    }

    render() {
        return (
            <div>
                <Filter onChangeParams={this.makeRequest}/>
                <VacancyList vacancies={this.props.vacancies} />
            </div>
        );
    }
}

export default ResponseComponent;
