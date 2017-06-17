import React,{Component} from 'react';
import { Route } from 'react-router-dom'
import Search from './Search';

export default class Landing extends Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            searchTerm: ""
        }
    }
    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        return(
            <div className="row jumbotron text-center">
                <h1>Mixd.In</h1>
                <h1><small>Pick Your Poison</small></h1>
                <Search onChange={this.handleChange}/>
                
            </div>
        )
    }
}