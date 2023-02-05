import React from "react";
import { Privacy } from "./Privacy";
import { Copyright } from "./Copyright";

export class ContactClass extends React.Component {
  constructor(props) {
    console.log("Constructor C");
    super(props);
    this.state = {
      avatar_url: null,
      name: null,
      // profileInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SwamixD");
    const info = await data.json();
    console.log(info, "userInfo");
    this.setState(
      {
        avatar_url: info.avatar_url,
        name: info.name
        // profileInfo: info,
      },
      () => {
        console.log(this.state, " state updated");
      }
    );
  }

  render() {
    console.log("Render Component");
    return (
      <>
        <h2>Welcome to Class Component</h2>
        <Privacy privacyObj={{ name: "DMCA" }} />
        <Copyright />
      </>
    );
  }
}
