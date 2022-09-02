import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <div className='App'>
      <MyNav />
      <MovieGallery saga='harry%20potter' title='Harry Potter' />
      <MovieGallery saga='batman' title='Batman' />
      <MovieGallery saga='avengers' title='Avengers' />
      <MyFooter />
    </div>
  );
}

export default App;
