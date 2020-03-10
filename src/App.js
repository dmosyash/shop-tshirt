import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import TshirtDetailView from './components/TshirtDetailView';
import Footer from './components/Footer';

/**
 * @name App
 * @description The main component of the app.
 * It contains three parts Header, Route part and Footer
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
      removedItem: {}
    };
  }

  goHome = () => this.props.history.push('/');

  addToCart = item => this.setState({ selectedItem: item });

  removeItemFromCart = item => this.setState({ removedItem: item });

  render() {
    const styleContainer = {
      padding: '15px',
      backgroundColor: '#fff',
      minHeight: '80vh'
    }

    return (
      <div>
        <Header goHome={this.goHome} cartItem={this.state.selectedItem} removeItemFromCart={this.removeItemFromCart} />
        <div style={styleContainer}>
          <Switch>
            <Route exact path="/" render={(routeProps) => (
              <Home {...routeProps} sendToCart={this.addToCart} removedItem={this.state.removedItem} />
            )} />
            <Route path="/tshirt-details/" component={TshirtDetailView} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
