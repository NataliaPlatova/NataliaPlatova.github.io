import React from 'react';
import ResponseComponent from "../responseComponent/responseComponent.js";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={vacancies: []};
        this.changeVacancyList = this.changeVacancyList.bind(this);
    }

    changeVacancyList(newList) {
        this.setState({vacancies: newList,});
    }

    render() {
        return(
            <ResponseComponent vacancies ={this.state.vacancies} onChange={this.changeVacancyList} />
        );
    }
};

export default List;
