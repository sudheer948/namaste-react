import { Component } from "react";
import User from "./User";
import UserClass from "./userClass";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  async componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;
