import "../style.css";
import React from "react";
import Button from "../Button/Button";
import TextIcon from "../TextIcon/TextIcon";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        name: "",
        email: "",
        addr: "",
        map: "",
        phone: "",
        password: "",
        picture: "",
        username: "",
      },
      loading: false,
    };

    // console.log("initial");
  }

  dataFetch = () => {
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        // // console.log(data.results[0]);
        //
        let userInfo = data.results[0];
        //
        let details = this.state.details;
        details.name = Object.keys(userInfo.name)
          .map((item) => {
            return userInfo.name[item];
          })
          .join(" ");
        details.email = userInfo.email;
        details.addr =
          userInfo.location.street.number +
          " " +
          userInfo.location.street.name +
          userInfo.location.city +
          userInfo.location.country;
        details.picture = userInfo.picture.large;
        details.map = userInfo.nat;
        details.phone = userInfo.phone;
        details.password = userInfo.login.password;
        details.username = userInfo.login.username;
        this.setState({ details, loading: false });
      });
  };

  componentDidMount = () => {
    // console.log("Mount - Container");
    this.dataFetch();
  };

  componentDidUpdate = () => {
    // console.log("Update - Container");
    // // console.log(this.state);
  };

  handleReload = (event) => {
    this.dataFetch();
    this.setState((prevState) => {
      return {
        loading: !prevState.loading,
      };
    });
  };

  handleHover = () => {};

  render() {
    return (
      <>
        <div className="main-container">
          <div className="half-up"></div>
          <div className="half-down"></div>
          <div className="card-container">
            <div className="card-up25">
              <img
                className="profile-picture"
                src={`${this.state.details.picture}`}
                alt="profile-pic"
              />
            </div>
            <hr />
            <div className="card-down75">
              <TextIcon data={this.state.details} />
              <button onClick={this.handleReload}>
                {this.state.loading ? "Loading..." : "Reload"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Container;
