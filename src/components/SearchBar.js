import React from "react";

class SearchBar extends React.Component {
  // by leaving off paranthesis so it is a callback, only called for change not render
  // uncontrolled handler
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  // arrow functions help keep context of state
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* this onsubmit is not the same as the prop that was passed in */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* uncontrolled way to handle the event */}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* controlled way to handle the event */}
            <input
              type="text"
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
