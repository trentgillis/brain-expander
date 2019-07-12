import React, {Component} from "react";

class SearchBar extends Component {
  state = {term: ""};
  
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
       <div className="search-bar ui segment">
         <form className="ui form" onSubmit={this.onFormSubmit}>
           <div className="field">
             <label htmlFor="">Video Search</label>
             {/* Remember, we want our text input to be a controlled component */}
             <input value={this.state.term} onChange={e => this.setState({term: e.target.value})} type="text"/>
           </div>
         </form>
       </div>
    );
  }
}

export default SearchBar;