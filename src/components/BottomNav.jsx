import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

const BottomNav = () => {
  return (
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
          <FontAwesomeIcon className='icons' icon={faThLarge}></FontAwesomeIcon>
          <FontAwesomeIcon className='icons' icon={faTh}></FontAwesomeIcon>
        </Col>
      </Row>
    </Container>
  );
};
export default BottomNav;
