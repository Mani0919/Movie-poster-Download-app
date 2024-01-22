import React, { useState } from "react";
import "./search.css";
import Download from "./Download";
function Movie() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search))
      .catch((error) => console.error("Error fetching data:", error));
    setSearch("");
  };

  return (
    <>
      <center>
        <h5 className="text-secondary text">Movie Poster Download App</h5>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} /><br /><br />
          <input type="submit" className="btn btn-outline-primary" />
        </form>
        <br/>
        <div className="row">
        {data.map((movie) => (
            <div className="col-md-4">
          <div className="card c" style={{ width: "18rem" }} >
            <img className="card-img-top cimg" src={movie.Poster} alt={movie.Title} />
            <div className="card-body">
              <h5 className="card-title ctitle">{movie.Title}</h5>
              <a href={movie.Poster} className="btn btn-primary" download>Download</a>
            </div>
          </div>
          </div>
        ))}
        </div>
      </center>
    </>
  );
}

export default Movie;
