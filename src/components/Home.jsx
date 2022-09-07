import BottomNav from "./BottomNav";
import MovieGallery from "./MovieGallery";

const Home = () => {
  return (
    <>
      <BottomNav />
      <MovieGallery saga='harry%20potter' title='Harry Potter' />
      <MovieGallery saga='batman' title='Batman' />
      <MovieGallery saga='avengers' title='Avengers' />
    </>
  );
};
export default Home;
