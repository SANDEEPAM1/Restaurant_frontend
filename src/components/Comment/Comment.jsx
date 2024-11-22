import React, { useState, useEffect } from "react";
import { useComment } from "../../context/CommentContext";
import axios from "axios";

const CommentModal = () => {
    const { isCommentOpen, currentMenuItemId, closeCommentModal } = useComment();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // useEffect(() => {
    //     if (currentMenuItemId) {
    //         // Fetch comments for the selected menu item
    //         axios.get(`/api/comments/${currentMenuItemId}`).then((res) => {
    //             setComments(res.data);
    //         });
    //     }
    // }, [currentMenuItemId]);

    const handleAddComment = () => {
        axios.post("/api/comments", { menuItemId: currentMenuItemId, comment: newComment })
            .then(() => {
                setComments([...comments, newComment]);
                setNewComment("");
                closeCommentModal();
            });
    };

    if (!isCommentOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={closeCommentModal}>Close</button>
                <h3>Feedback for Item {currentMenuItemId}</h3>
                <img src={`/${currentMenuItemId}-image`} alt="Food Item" />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add your comment"
                />
                <button onClick={handleAddComment}>Add Comment</button>
                <div>
                    {/* <h4>Comments</h4>
                    {comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
