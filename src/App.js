import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCharacters from './store/actions/character/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Container/Home/index';
import DetailCharacter from './Container/DetailCharacter';

class App extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/character/:idCharacter" component={DetailCharacter} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.dados.characters,
  };
};

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCharacters, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(App);
