import { Movies } from "../Movies/Movies";
import "./Details.css";
export const Details = () => {
      const items = ["Titulo", "Duracion", "Rating", "Género", "Premios"];
      const movies = [
            ["Billy Eliot", 123, 5, ["Drama", "Comedia"], 2],
            ["Alicia en el pais de las maravilla", 142, 4.8, ["Drama", "Accion", "Comedia"], 3],
      ];
      return (
            <>
                  <div className="bg-white ">
                        <div className="card-header py-3">
                              <ul className="d-sm-flex align-items-center justify-content-around mb-4 navDetail">
                                    {items.map((item, i) => (
                                          <li key={i}> {item} </li>
                                    ))}
                              </ul>
                        </div>
                        <div className="card-header py-3">
                              <ul className=" mb-4 navDetail">
                                    {movies.map((movie, i) => (
                                          <li key={i} style={{ textAlign: "left" }}>
                                                <Movies movies={movie} />
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </>
      );
};
