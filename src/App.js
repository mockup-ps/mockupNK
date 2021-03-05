import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import {
CModal,
CModalHeader,
} from '@coreui/react'
import { fireAuth } from "./fireApi";
import PintuGerbang from "./PintuGerbang";
import firebase from "firebase";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const Terlindungi = PintuGerbang("/login", TheLayout);

class App extends Component {
  constructor() {
    super();
    console.log("user", fireAuth.currentUser);
    this.state = {
      me: fireAuth.currentUser,
      modal:false
    };
  }
  componentDidMount() {
    fireAuth.onAuthStateChanged(me => {
      me
      ? this.setState({ me: me })
      : this.setState({ me: null });
    });  
  }
  handleSignIn = history => (email, password) => {
    fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.setState({modal:true})
      setTimeout(() => {
        history.push("/profile");
        this.setState({modal:false})
      }, 3000)
    }).catch(() => {
      alert("Hayoo, username/passwordnya salah.")
    });
    fireAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
      return fireAuth.signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }; 

  render() {
    const { me } = this.state;
    return (
      <>
      <CModal
      show={this.state.modal}
      >
        <CModalHeader>
          <h3>Login Sukses !</h3>
        </CModalHeader>
      </CModal>
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <Route exact path="/login" name="Login Page" render={({ history }) => <Login onSubmit={this.handleSignIn(history)}/>} />
            <Route path="/" name="Home" render={props => <Terlindungi {...props} me={me} />} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </>
    );
  }
}

export default App;
