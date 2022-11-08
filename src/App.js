import React, { Component } from "react";
import Greet from "./components/Functional";
import Welcome from "./components/Welcome";
import Statefullclass from "./components/Statefull";
import Shushila from "./components/Classcomponent";
import Siri from "./components/Jsx";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        <hr />
        <ParentComponent />
        <hr />
        <UserGreeting />
        <hr />
        <EventBind />
        <hr />
        <FunctionClick />

        <hr />
        <ClassClick />
        <hr />
        <Message />

        <hr />
        <Counter />
        <hr />

        <Greet name="Bruce" heroName="Batman">
          <p>This is Children </p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Click Here</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <hr />

        <Welcome />
        <hr />
        <Statefullclass name="Shushila" state="react" />
        <Statefullclass name="Shush" state="react" />
        <Statefullclass name="ila" state="react" />
        <hr />
        <Shushila />
        <hr />
        <Siri />
        <hr />
        <h1>hello from app.js</h1>
      </div>
    );
  }
}

export default App;
