import { useState, useEffect } from "react";


const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [APIKey, setAPIKey] = useState();
  const [productID, setProductID] = useState();

  const getReviews = async (_APIKey) => {
    const response = await fetch(`/apiv01/reviews/${_APIKey}`);
    const reviews = await response.json();
    const displayReviews = reviews.map(review => {
      return {
        
        title: review.title,
        comments: review.comments,
      };
    })
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["TITLE", "COMMENT"];
    headers.forEach(headerText => {
      const header = document.createElement("th");  
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

      // Create data rows 
      displayReviews.forEach(review => {
    const row = document.createElement("tr");
    Object.values(review).forEach(text => {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
    // Add the table to the page
    document.body.appendChild(table);
    
    setReviews(reviews);
    console.log(reviews);
  };

  
  const items = [];
  return (
    <>
      {items.map((item) => {
        return (
          <div className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>Reviews LSLLSLLsl</p>
            <div>
              {reviews &&
                reviews.map((review) => {
                  return (
                    <>
                      <h4>{review.title}</h4>
                      <p>{review.comments}</p>
                    </>
                  );
                })}
            </div>
          </div>
        );
      })}

      <label>Station Name</label>
      <input type="text" onChange={(e) => setAPIKey(e.target.value)}></input>
      <button onClick={() => getReviews(APIKey)}>
        Get All Reviews by APIKey
      </button>
      
    </>
  );
};

export default Reviews;
