import React from "react";

class TextIcon extends React.Component {
  constructor(props) {
    super(props);
    // let data = this.props.data;
    this.state = {
      textType: "",
      text: "",
    };
    // console.log("Constructor Text");
  }

  componentDidMount = () => {
    // console.log("Mount");
    this.setState({
      textType: "name",
      text: this.props.data.name,
    });
  };

  componentDidUpdate = () => {
    // console.log("Update");
    // console.log(this.props);
  };

  hoverHandle = (event) => {
    this.setState({
      textType: event.target.getAttribute("data-name"),
      text: this.props.data[event.target.getAttribute("data-name")],
    });
  };

  render() {
    return (
      <>
        <span>
          My {this.state.textType ? `${this.state.textType}` : "name"} is
        </span>
        <h1>{this.state.text ? `${this.state.text}` : this.props.data.name}</h1>
        <div className="icon-container">
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            src="/icons/user-solid.svg"
            alt={`user-name`}
            data-name="name"
          />
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            data-name="email"
            src="/icons/envelope-open-solid.svg"
            alt="age"
          />
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            src="/icons/address-card-regular.svg"
            alt="address-card"
            data-name="addr"
          />
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            src="/icons/map-solid.svg"
            alt="solid-map"
            data-name="map"
          />
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            src="/icons/phone-solid.svg"
            alt="phone-solid"
            data-name="phone"
          />
          <img
            onMouseEnter={this.hoverHandle}
            className="icon"
            src="/icons/lock-solid.svg"
            alt="lock-solid"
            data-name="password"
          />
        </div>
      </>
    );
  }
}

export default TextIcon;
