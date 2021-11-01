import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signout-page/signin-and-signout-page.component';
import { Redirect } from 'react-router';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/signin' render={() => this.props.currentUser ? 
            (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: user => dispatch(checkUserSession(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
