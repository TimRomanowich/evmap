import { useState } from "react";
import { useNavigate } from "react-router-dom";



/**
 * React functional component for adding comments or reviews.
 * @returns {JSX.Element} The AddComment component.
 */
const AddComment = () => {
  const [title, setTitle] = useState("");
  const [stationID, setStationID] = useState("");
  const [body, setBody] = useState("");
  const [APIKey, setAPIKey] = useState("");

  const navigate = useNavigate();

  /**
   * Handles the form submission.
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { stationID, APIKey, title, body };
    try {
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
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the comment.");
    }
    navigate(-1);
  };

  return (
    <div className="CreateComment">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="stationID">Station ID</label>
          <input
            id="stationID"
            type="text"
            required
            value={stationID}
            onChange={(e) => setStationID(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="APIKey">API Key</label>
          <input
            id="APIKey"
            type="text"
            required
            value={APIKey}
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

        <button type="submit">Add Comment</button>
      </form>
      <br />
      <br />
      <p>stationID: {stationID}</p>
      <p>APIKey: {APIKey}</p>
      <p>Title: {title}</p>
      <p>Comments: {body}</p>
      <br />
    </div>
  );
};

export default AddComment;


