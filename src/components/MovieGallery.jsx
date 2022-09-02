import { Component } from "react";
import { Container } from "react-bootstrap";

class MovieGallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    this.fetchSearch();
  };

  fetchSearch = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=77c99ecd&s=" + this.props.saga
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          movies: data.Search,
        });
      } else {
        console.log("somthing wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h4 className='text-white ml-4'>{this.props.title} Saga</h4>
        <Container className='d-flex px-0 py-4 mr-0 ml-4'>
          {this.state.movies.map((posters) => (
            <div key={posters.imdbID} className='col mb-2 px-1'>
              <img
                className='imgMovie'
                style={{ width: "200px", height: "300px" }}
                src={posters.Poster}
                alt='moviepicture'
              />
            </div>
          ))}
        </Container>
      </>
    );
  }
}
export default MovieGallery;
