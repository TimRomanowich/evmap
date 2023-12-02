import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddComment = () => {
  const [title, setTitle] = useState("");
  const [stationID, setstationID] = useState("");
  const [body, setBody] = useState("");
  const [APIKey, setAPIKey] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { stationID, APIKey, title, body };
    const response = await fetch("/apiv01/reviews", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    if (response.status === 201) {
      alert("Successfully added review/comment");
    } else {
      alert(
        `Failed to create comment. Please contact IT, status code = ${response.status}`
      );
    }
    navigate(-1);
  };

  return (
    <div className="CreateComment">
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="Station ID">stationID</label>
          <input
            id="stationID"
            type="text"
            required
            value={stationID}
            onChange={(e) => setstationID(e.target.value)}
          />
        </div>
        

        <div>
          <label htmlFor="APIKey">API Key</label>
          <input
            id="APIKey"
            type="text"
            required
            vaue={APIKey}
            onChange={(e) => setAPIKey(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="body">Comments</label>
          <br />
          <textarea
            required
            value={body}
            rows="6"
            cols="50"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>



        <button>Add Comment</button>
      </form>
      <br></br>
      <br></br>
      <p>stationID: {stationID}</p>
      <p>APIKey: {APIKey}</p>
      <p>Title: {title}</p>
      <p>Comments: {body}</p>
      <br></br>
    </div>
  );
};

export default AddComment;
