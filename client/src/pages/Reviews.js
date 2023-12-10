import { useState, useEffect } from "react";
import "../styles/Reviews.css";
import "../components/Map/layers/marker_layer";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [APIKey, setAPIKey] = useState('');

  const getReviews = async (_APIKey) => {
    const response = await fetch(`/apiv01/reviews/${_APIKey}`);
    const reviews = await response.json();
    setReviews(reviews);
    console.log(reviews);
  };

  useEffect(() => {
    const displayReviews = reviews.map(review => {
      return {
        title: review.title,
        comments: review.comments,
      };
    });
    setTableData(displayReviews);
  }, [reviews]);

  const [tableData, setTableData] = useState([]);

  return (
    <>
      <label>Station Name</label>
      <input type="text" onChange={(e) => setAPIKey(e.target.value)}></input>
      <button onClick={() => getReviews(APIKey)}>
        Get All Reviews for this Station:
      </button>
      
      {tableData.length > 0 && (
        <table class = "review-table">
        <thead class = "review-table thead tr">
        <th>TITLE</th>
        <th>COMMENT</th>
        </thead>  
          {tableData.map(review => (
            <tr class = "active-row">
              <td>{review.title}</td>
              <td>{review.comments}</td>
            </tr>
          ))}
        </table>
      )}


    </>
  );
};

export default Reviews;


