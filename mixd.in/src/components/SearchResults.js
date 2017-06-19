import React,{Component} from 'react';
import { Collapse,Carousel } from 'react-bootstrap';


const DumbComponent = (props) => {
    return(
        <div>
        <span className="col-md-2 sp">
            <a href={`/${props.results[0].type}s/${props.results[0].id}`}>
            <div className="card cc">
                <img alt="900x500" src={props.results[0].type === "drink" ? "/icons/002-drink-1.png" : "/icons/006-fruit.png"}/>
                <h3>{props.results[0].name}</h3>
                <div>{props.results[0].description}</div>
            </div>
            </a>
        </span>
        <span className="col-md-2 sp">
            <a href={`/${props.results[1].type}s/${props.results[1].id}`}>
            <div className="card cc">
                <img alt="900x500" src={props.results[1].type === "drink" ? "/icons/002-drink-1.png" : "/icons/006-fruit.png"}/>
                <h3>{props.results[1].name}</h3>
                <div>{props.results[1].description}</div>
            </div>
            </a>
        </span>
        <span className="col-md-2 sp">
            <a href={`/${props.results[2].type}s/${props.results[2].id}`}>
            <div className="card cc">
                <img alt="900x500" src={props.results[2].type === "drink" ? "/icons/002-drink-1.png" : "/icons/006-fruit.png"}/>
                <h3>{props.results[2].name}</h3>
                <div>{props.results[2].description}</div>
            </div>
            </a>
        </span>
        <span className="col-md-2 sp">
            <a href={`/${props.results[3].type}s/${props.results[3].id}`}>
            <div className="card cc">
                <img alt="900x500" src={props.results[3].type === "drink" ? "/icons/002-drink-1.png" : "/icons/006-fruit.png"}/>
                <h3>{props.results[3].name}</h3>
                <div>{props.results[3].description}</div>
            </div>
            </a>
        </span>
        </div>
    )
}
export default class SearchResults extends Component {


    render() {
            
            let pages = []
            for(let i = 0; i<Math.round(this.props.results.length/4); i++) {
                pages.push(
                    <Carousel.Item>
                        <div className="row text-center">
                            <span className="col-md-2"></span>
                                <DumbComponent results={this.props.results.slice((i*4),(i*4)+4)} />
                            <span className="col-md-2"></span>
                        </div>
                    </Carousel.Item>
                )
            }
            
            return (
             <Carousel>
                
                {pages.map(page => page)}
                
                
                
                
            </Carousel>   
        )
        
        
    }
} 
  