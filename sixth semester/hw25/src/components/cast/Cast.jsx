import { useEffect, useState } from "react";
import { getCast } from "../../api/fetch-movies";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCast(movieId);
        setCast(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className="container">
      <h2>Cast</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem
            key={id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))}
      </ul>
    </div>
  );
}
