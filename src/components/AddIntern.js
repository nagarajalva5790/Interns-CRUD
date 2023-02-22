import React, { Component } from "react";

class AddIntern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIntern: {
        name: "",
        email: "",
      },
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    // console.log(this.state.addIntern)
    this.setState({
      addIntern: {
        ...this.state.addIntern,
        [e.target.name]: e.target.value,
      },
    });
    // console.log("New Intern Details", this.state.addIntern);
  }

  add = (e) => {
    e.preventDefault();
    this.props.addInternHander(this.state.addIntern);
    this.setState({
      addIntern: {
        name: "",
        email: "",
      },
    });
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Intern</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.addIntern.name}
              onChange={this.updateValue}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.addIntern.email}
              onChange={this.updateValue}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddIntern;
