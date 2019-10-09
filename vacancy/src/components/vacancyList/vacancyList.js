import React from "react";
import Vacancy from "../vacancy/vacancy.js";
import './vacancyList.css';

class VacancyList extends React.Component{
    render() {
        return (
            <div>
                <h1>Найдено {this.props.vacancies.length} вакансий</h1>
                <div>
                    {this.props.vacancies.map(vacancy => {
                        return <Vacancy vacancy={vacancy} key={vacancy} />
                    })
                    }
                </div>
            </div>
        );
    }
}

export default VacancyList;
