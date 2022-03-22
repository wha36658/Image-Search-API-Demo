import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  changeHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.changeHandler}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
