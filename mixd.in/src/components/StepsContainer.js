import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Search from './Search';
import DrinksAdapter from '../adapters';

export default class Landing extends Component {
    constructor() {
        super()
        this.state = {
            
                name: '',
                description: '',
                ingredients: [{id: 1, name:'', unit:'', quantity:''}],
                steps: [{name:'', length_of_time:''}],
                equipments: [{name:''}],
                tags: [{name:''}]
            
            
        }
    }
    componentDidMount() {
        debugger
        DrinksAdapter.show()
        .then( drink => console.log(drink) )
        
    }

    render() {
        return(
            <div class="stepsContainer">
                
            </div>
        )
    }
}