import React,{Component} from 'react';
import { Collapse } from 'react-bootstrap';

export default class SearchResults extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <div onClick={()=> this.setState({ open: !this.state.open })}><h4 className="card-header">{this.props.results.name} {this.props.results.type === "drink" ? "drink" : "ingredient"}</h4></div>
                <Collapse in={this.state.open}>
                    <div>{this.props.results.type === "drink" ? "drink" : "ingredient"}</div>
                </Collapse>
                
            </div>
        )
    }
} 
  