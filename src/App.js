import React, { Component } from "react";

import data from "./data.json";
import ListItem from "./ListItem";

const listData = data.slice(0, 9);


class App extends Component {
  state = {
    ids: []
  };

  areYouInState = (id) => {
    return this.state.ids.indexOf(id) > -1;
  };

  pushIdsToState = arg => {
    const { ids } = this.state;
    let newIds = [];

    if (this.areYouInState(arg)) {
      newIds = ids.filter(item => item !== arg);
    } else {
      newIds = [...ids, arg];
    }

    this.setState({
      ids: newIds,
    });
  };

  render() {
    const { ids } = this.state;

    return (
      <div className="App">
        <div className="list-actions">
          <strong>Selected Item Ids:</strong>
        </div>
        <ul className="list">
          {listData.map(item => (
            <ListItem
              key={item._id}
              item={item}
              active={this.areYouInState(item._id)}
              onChange={this.pushIdsToState}
            />
          ))}
        </ul>
        <p>{ids && ids.join(', ')}</p>
      </div>
    );
  }
}

export default App;
