import React from "react";
import './vacancy.css';
import {Link} from "react-router-dom";
import {Request as match} from "whatwg-fetch";

class Vacancy extends React.Component {
    render() {
        return (
            <div className='vacancyListItem'>
                <div className='vacancyListHead'>
                    <h3><Link to={`${match.url}/vacancy`}>{this.props.vacancy.title}</Link></h3>
                    <p className='date'>{this.props.vacancy.created_at}</p>
                </div>
                <h5>{this.props.vacancy.company}</h5>
                <div className='location'><img src='./121923-200.png' alt='' /><p>{this.props.vacancy.location}</p></div>
                <p>{this.props.vacancy.type}</p>
                <hr/>
            </div>
        );
    }
}

export default Vacancy;
