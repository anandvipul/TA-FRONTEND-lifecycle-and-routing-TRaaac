import "../style.css";
import React from "react";
import Button from "../Button/Button";

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

    console.log("initial");
  }

  componentDidMount() {
    console.log("Mount");
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results[0]);
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
        details.addr = Object.keys(userInfo.location)
          .map((item) => {
            return userInfo.location[item];
          })
          .join(" ");
        details.picture = userInfo.picture.large;
        details.map = userInfo.nat;
        details.phone = userInfo.phone;
        details.password = userInfo.login.password;
        details.username = userInfo.login.username;
        this.setState({ details });
      });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="half-up"></div>
          <div className="half-down"></div>
          <div className="card-container">
            <div className="card-up25">
              <img src="www.google.com" alt="profile-pic" />
            </div>
            <hr />
            <div className="card-down75">
              <span>My name is</span>
              <h1>{this.state.details.name}</h1>
              <div className="icon-container">
                <img src="/icons/user-solid.svg" alt={`user-name`} />
                <img src="/icons/envelope-open-solid.svg" alt="age" />
                <img src="/icons/address-card-regular.svg" alt="address-card" />
                <img src="/icons/map-solid.svg" alt="solid-map" />
                <img src="/icons/phone-solid.svg" alt="phone-solid" />
                <img src="/icons/lock-solid.svg" alt="lock-solid" />
              </div>
              <Button class={`loading`} text={`Loading...`} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Container;
