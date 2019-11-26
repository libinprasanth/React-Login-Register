import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';  

class Wrapper extends Component{
  render(){
    return(
      <React.Fragment>
       <Switch>  
          <Route exact path='/login'>
            login
          </Route>
          <Route exact path='/'>
            as
          </Route>
       </Switch>
      </React.Fragment>
    )
  }  
}

export default Wrapper;