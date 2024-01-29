import { Component } from "react";
import { APIData } from "./ClassUseContext";

export class ClassCom1 extends Component {
  render() {
    return (
      <APIData.Consumer>
        {(data) => {
          console.log(data);
          return (
            <div>
              <h3>Class Component 1 </h3>
              {data}
            </div>
          );
        }}
      </APIData.Consumer>
    );
  }
}

export default ClassCom1;
