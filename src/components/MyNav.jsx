import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faTh,
  faThLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";

const MyNav = () => {
  return (
    <>
      <Navbar className='navbar' collapseOnSelect expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            src={Logo}
            style={{ width: "100px", height: "55px" }}
            alt='netflix-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='text-white' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className='text-white' href='#tvshows'>
              TV shows
            </Nav.Link>
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
      <Container fluid>
        <Row className='d-flex justify-content-between'>
          <Col className='d-flex justify-content-start ml-2'>
            <h2 className='mb-4 text-white'>TV Shows</h2>
            <Dropdown className='dropdown ml-4 mt-1'>
              <Dropdown.Toggle
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ backgroundColor: "#221f1f" }}
                id='dropdownMenuButton'
                type='button'
                className='btn btn-secondary btn-sm dropdown-toggle rounded-0'
              >
                Genres &nbsp;
              </Dropdown.Toggle>

              <Dropdown.Menu
                className='dropdown-menu bg-dark'
                aria-labelledby='dropdownMenuButton'
              >
                <Dropdown.Item
                  className='dropdown-item text-white bg-dark'
                  href='#comedy'
                >
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item
                  className='dropdown-item text-white bg-dark'
                  href='#drama'
                >
                  Drama
                </Dropdown.Item>
                <Dropdown.Item
                  className='dropdown-item text-white bg-dark'
                  href='#thriller'
                >
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className='d-flex justify-content-end mr-4'>
            <FontAwesomeIcon
              className='icons'
              icon={faThLarge}
            ></FontAwesomeIcon>
            <FontAwesomeIcon className='icons' icon={faTh}></FontAwesomeIcon>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNav;
