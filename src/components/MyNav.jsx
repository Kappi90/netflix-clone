import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

  return (
    <>
      <Navbar className='navbar' collapseOnSelect expand='md'>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src={Logo}
              style={{ width: "100px", height: "55px" }}
              alt='netflix-logo'
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link
              className={
                "nav-link text-white" +
                (location.pathname === "/" ? "active" : "")
              }
              to='/'
            >
              Home
            </Link>
            <Link
              className={
                "nav-link text-white" +
                (location.pathname === "/tv-shows" ? "active" : "")
              }
              to='/tv-shows'
            >
              TV shows
            </Link>
            <Nav.Link className='text-white' href='#movies'>
              Movies
            </Nav.Link>
            <Nav.Link className='text-white' href='#recentlyadded'>
              Recently Added
            </Nav.Link>
            <Nav.Link className='text-white' href='#mylist'>
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2'
                aria-label='Search'
              />
              <Button className='bg-dark' variant='outline-none'>
                <FontAwesomeIcon
                  className='icons'
                  icon={faSearch}
                ></FontAwesomeIcon>
              </Button>
            </Form>
            <Nav.Link className='text-white' href='#kids'>
              Kids
            </Nav.Link>
            <Nav.Link className='text-white' href='#news'>
              <FontAwesomeIcon
                className='icons'
                icon={faBell}
              ></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link className='text-white' href='#user'>
              <FontAwesomeIcon
                className='icons'
                icon={faUser}
              ></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;
