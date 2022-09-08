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
  const [movies, setMovies] = useState(null);

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
        setMovies(data);
      } else {
        console.log("somthing wrong");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4 className='text-white ml-4'>{props.title} Saga</h4>
      <Container fluid className='d-flex px-0 py-4 mr-0 ml-4'>
        {movies &&
          movies.Search.map((movie) => (
            <div key={movie.imdbID} className='col mb-2 px-1 divImg'>
              <Link to={"/moviedetails/" + movie.imdbID}>
                <img
                  className='imgMovie'
                  style={{ width: "200px", height: "300px" }}
                  src={movie.Poster}
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
