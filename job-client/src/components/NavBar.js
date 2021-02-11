import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function NavBar() {
    const [searchString, setSearchString] = useState("");
    const history = useHistory();

    const onInputChange = (event) => {
        setSearchString(event.target.value);
    }

    const onSearchClick = (event) => {
        event.preventDefault()
        history.push(`/jobs?searchString=${searchString}`);
    }

    return (
        <Navbar bg='dark' expand='lg'>
        <Navbar.Brand href='/'>Job-Search-App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Admin' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/new'>Add</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Edit/Delete
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={onSearchClick}>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' value={searchString} onChange={onInputChange}/>
            <Button variant='outline-success' type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
