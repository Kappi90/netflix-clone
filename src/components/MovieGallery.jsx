import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieGallery = (props) => {
  /*state = {
    movies: [],
  };

  componentDidMount = () => {
    this.fetchSearch();
  };
*/
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, []);

  const fetchSearch = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=77c99ecd&s=" + props.saga
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        /*this.setState({
          movies: data.Search,
        });*/
        setMovies(data.Search);
      } else {
        console.log("somthing wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4 className='text-white ml-4'>{props.title} Saga</h4>
      <Container fluid className='d-flex px-0 py-4 mr-0 ml-4'>
        {movies.map((posters) => (
          <div key={posters.imdbID} className='col mb-2 px-1 divImg'>
            <Link to={"/moviedetail"}>
              <img
                className='imgMovie'
                style={{ width: "200px", height: "300px" }}
                src={posters.Poster}
                alt='moviepicture'
              />
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
};

export default MovieGallery;
