import { useEffect } from "react";
import "./nested.css";

export default function Nested() {
  const addReply = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "comment-details");
    div.innerHTML += ` <div class='comment-details'>
    <input />
    <button id="submit" class='submit'>Submit</button>
  </div>`;

    return div;
  };

  const addComment = (text) => {
    const div = document.createElement("div");
    div.setAttribute("class", "all-comment");
    div.innerHTML += ` <div class='card'>
    <span class='text'>${text}</span>
    <span id='reply' class='reply'>
      Add Reply
    </span>
  </div>`;

    return div;
  };

  useEffect(() => {
    const commentContainer = document.getElementById("comment-container");
    commentContainer.addEventListener("click", function (e) {
      const replyButton = e.target.classList.contains("reply");
      const submitButton = e.target.classList.contains("submit");
      const closest = e.target.closest(".all-comment");
      if (replyButton && closest) {
        closest.appendChild(addReply());
      }

      if (submitButton) {
        const commentDetails = e.target.closest(".comment-details");
        if (commentDetails.children[0].value) {
          closest.appendChild(addComment(commentDetails.children[0].value));
          commentDetails.remove();
        }
      }
    });
  }, []);

  return (
    <div className="container">
      <div id="comment-container" className="comment-container">
        <div className="all-comment">
          <div className="card">
            <span className="text">First Commenter</span>
            <span id="reply" className="reply">
              Add Reply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
