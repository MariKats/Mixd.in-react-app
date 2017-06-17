import React,{Component} from 'react';

export default class SearchResults extends Component {

    render() {
        return (
            <li>{this.props.results.name}</li>
        );
    }
}
const SearchResults = ({results}) => {
  debugger
  return (
  <li>{results.name}</li>
)}

export default SearchResults;
