import React from "react";

class SearchBar extends React.Component {
  state = { search_term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.search_term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search_bar">Search for video here</label>
            <input
              type="text"
              name=""
              value={this.state.search_term}
              onChange={e => this.setState({ search_term: e.target.value })}
              id=""
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
