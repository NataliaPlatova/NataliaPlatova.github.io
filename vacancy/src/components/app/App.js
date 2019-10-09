import React from 'react';
import './App.css';
import List from "../list/list.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VacancyPage from "../vacancyPage/vacancyPage.js";
import {Binding as match} from "@babel/traverse";


class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={List} />
                        <Route path={`${match.path}/vacancy`} component={VacancyPage}/>
                    </div>
                </Router>
            </div>
        );
      }
};

export default App;
