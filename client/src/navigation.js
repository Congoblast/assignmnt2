import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import {Navbar, Nav} from "react-bootstrap";
import "./styles.css";

function Navigation(){
    return(
        <Router>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Application</Navbar.Brand>

        <Nav className="mr-auto">
            <Link className="navitem" to="/questions">List</Link>
          <Link className="navitem" to="/question">Add</Link>

          </Nav>
        </Navbar>
        <Switch>
        <Route path="/question" exact component = {AddQuestion}/>
      <Route path="/questions" exact component={QuestionList}/>
      <Route path="/questions/update/:id" 
      exact component={AddAnswer} />
        </Switch>
      </Router>
    )
}
export default Navigation;
