import { Component } from "react";
import './search.box.components.css'
class SearchBox extends Component{
    render(){
        return(
            <div className="searchComponent">
                <input
                    type="search"
                    name="search"
                    id={this.props.id}
                    className= {` searchBox ${this.props.className}`}
                    placeholder={this.props.placeholder}
                    onChange={ this.props.onChangeHandler}
                />
            </div>
        )
    }
}
export default SearchBox