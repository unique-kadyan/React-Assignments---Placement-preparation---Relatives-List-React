import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["r1", "r2", "r3", "r4"];
    const relativeList = relatives.map((relative) => <h2>{relative}</h2>);

    return (
      <div id="main">
        {/* Do not remove the main div */}
        {
          <ol key="relativeList">
            <li key="relativeListItem1">{relatives[0]}</li>
            <li key="relativeListItem2">{relatives[1]}</li>
            <li key="relativeListItem3">{relatives[2]}</li>
            <li key="relativeListItem4">{relatives[3]}</li>
          </ol>
        }
      </div>
    );
  }
}

export default App;
