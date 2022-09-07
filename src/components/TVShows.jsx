import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TVShows = () => {
  /* state = {
    tvshows: [],
  };

  componentDidMount = () => {
    this.fetchSearch();
  };
*/
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, []);

  const fetchSearch = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=77c99ecd&s=breaking+bad"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        /*this.setState({
          tvshows: data.Search,
        });*/
        setTvshows(data.Search);
      } else {
        console.log("somthing wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid className='d-flex px-0 py-4 mr-0 ml-4'>
        <Row className='justify-content-center'>
          {tvshows.map((posters) => (
            <Col
              key={posters.imdbID}
              className='text-center my-4 divImg'
              xs={12}
              md={4}
              lg={2}
            >
              <img
                className='imgMovie'
                style={{ width: "200px", height: "300px" }}
                src={posters.Poster}
                alt='moviepicture'
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TVShows;
