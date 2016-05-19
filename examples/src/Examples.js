/* eslint react/no-danger: 0 */
import React, { Component } from "react";
import SimpleCalendar from "./examples/SimpleCalendar";


const EXAMPLES = {
  simple: {
    title: "Calendar",
    description: "This calendar shows the clicked day in an alert dialog.",
    Component: SimpleCalendar
  }
};


export default class Examples extends Component {

  state = {
    currentExample: "simple",
    showNavBar: false
  };



  render() {
    const { currentExample, showNavBar } = this.state;

    const ExampleComponent = EXAMPLES[currentExample].Component;

    return (
      <div>
          <div className="Examples">
            <h2>
                { EXAMPLES[currentExample].title }
            </h2>

            <div className="Example">
              <div className="Example-Result">
                <ExampleComponent />
              </div>
            </div>
          </div>
      </div>
    );
  }

}
