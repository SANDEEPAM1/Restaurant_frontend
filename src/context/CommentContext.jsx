import { createContext, useState, useContext } from "react";

const CommentContext = createContext();

export const useComment = () => useContext(CommentContext);

export const CommentProvider = ({ children }) => {
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [currentMenuItemId, setCurrentMenuItemId] = useState(null);

    const openCommentModal = (menuItemId) => {
        setCurrentMenuItemId(menuItemId);
        setIsCommentOpen(true);
    };

    const closeCommentModal = () => {
        setIsCommentOpen(false);
        setCurrentMenuItemId(null);
    };

    return (
        <CommentContext.Provider value={{ isCommentOpen, currentMenuItemId, openCommentModal, closeCommentModal }}>
            {children}
        </CommentContext.Provider>
    );
};
