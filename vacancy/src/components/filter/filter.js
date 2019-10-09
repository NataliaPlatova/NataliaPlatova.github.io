import React from 'react';
import './filter.css';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.holdChange = this.holdChange.bind(this);
    }

    holdChange(e) {
        const newQueryParams = e.target.id;
        const newWordQuery = e.target.value;
        this.props.onChangeParams(newQueryParams, newWordQuery);
    }

    render() {
        return(
            <div className='filter'>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="true" id="full_time=" onChange={this.holdChange}/>
                        <label className="form-check-label" htmlFor="full_time=">
                            Full time
                        </label>
                </div>
                <div className="form-group">
                    <label htmlFor="location=">Location</label>
                    <input className="form-control" id="location=" onMouseLeave={this.holdChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description=">Description</label>
                    <input className="form-control" id="description=" onMouseLeave={this.holdChange}/>
                </div>
            </div>

        );
    }
}

export default Filter;
