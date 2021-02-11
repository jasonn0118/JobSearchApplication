import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobList from './components/JobList';
import Job from './components/Job';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/jobs'/>
          </Route>
          <Route exact path='/new' component={Job} />
          <Route exact path='/edit/:id' component={Job} />
          <Route exact path='/jobs' component={JobList} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
