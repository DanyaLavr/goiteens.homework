import { useEffect, useState } from "react";
import { getReviews } from "../../api/fetch-movies";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getReviews(movieId);
        setReviews(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h2>Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((elem) => (
            <li key={elem.id}>
              <h3>{elem.author}</h3>
              <span>Rating: {elem.author_details.rating}</span>
              <p>{elem.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Відгуків немає</p>
      )}
    </div>
  );
}
