import { Component } from "react";
import UserContext from "../utils/UserContext";

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
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-md rounded-2xl p-6 mb-8">
        <p className="text-gray-600 text-lg mb-2">  LoggedIn User</p>
          <UserContext.Consumer>
            { ({loggedInUser}) => <h1 className="text-2xl font-bold text-orange-500">{loggedInUser}</h1> }
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
