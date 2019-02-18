import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Route,Switch,withRouter } from 'react-router-dom';

import Homepage from './Page/Homepage';
import Detail from './Page/Detail';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {setCredit} from './redux/action/user';

class App extends Component {
  componentDidMount(){
    this.props.setCredit(100000);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:idx" exact component={Detail} /> 
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) =>({

  credit:state.user.credit,
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
setCredit
},dispatch)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));