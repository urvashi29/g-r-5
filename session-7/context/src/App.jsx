import React from "react";
import Movies from "./components/Movies";
import MovieCount from "./components/MovieCount";

const App = () => {
  // state uplifting 
  // const [movies, setMovies] = React.useState([
  //   { id: 1, name: "Inception" },
  //   { id: 2, name: "Interstellar" },
  //   { id: 3, name: "The Dark Knight" },
  // ]);

  return (
    <div>
      <Movies />
      <MovieCount />
    </div>
  );
};

export default App;
