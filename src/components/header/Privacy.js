import React from "react";

export class Privacy extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      componentName: "Privacy Compo",
      type: "Child",
    };
  }


  componentDidMount() {
    console.log("Component Did mount called")
    // this.interval = setInterval(() => {
    //     console.log('log');
    // }, 1000)
  }

  componentWillUnmount() {
    // clearInterval(this.interval)
  }

  render() {
    return (
      <>
        <h3>Privacy Component Called Inside Parent Component - </h3>
        {this.props.privacyObj.name}
        <br></br> Name - {this.state.componentName}
        Type of Component - {this.state.type}
        <button
          onClick={() => {
            this.setState({
              componentName: "Privacy Dump",
              type: 'Parent to Child'
            });
          }}
        >
          Update
        </button>
      </>
    );
  }
}
