import { createContext, useContext, useState } from 'react';
import { Comments, User } from '../../../../../types';
import { getDate } from '../../../../../util/date';

interface ICommentContext {
  comments: Array<Comments>;
  setComments: Function;
  createComment: Function;
  updateComment: Function;
  deleteComment: Function;
}

const CommentsContext = createContext<ICommentContext>(null);
export const useComments = () => useContext(CommentsContext);

const CommentsProvider = ({ children }: any) => {
  const [comments, setComments] = useState([]);

  const createComment = (
    id: number,
    parentId: number,
    content: string,
    user: User,
  ) => {
    const newComment = {
      id,
      children: [] as Comments[],
      content,
      user,
      createdAt: getDate(),
    };

    if (parentId) {
      setComments(
        comments.map((comment: any) =>
          comment.id === parentId
            ? { ...comment, children: [...comment.children, newComment] }
            : comment,
        ),
      );
      return;
    }

    setComments([...comments, newComment]);
  };

  const updateComment = (id: number, parentId: number, editContent: string) => {
    if (parentId) {
      setComments(
        comments.map((comment: any) =>
          comment.id === parentId
            ? {
                ...comment,
                children: [...comment.children].map((child) =>
                  child.id === id ? { ...child, content: editContent } : child,
                ),
              }
            : comment,
        ),
      );
      return;
    }

    setComments(
      comments.map((comment: any) =>
        comment.id === id ? { ...comment, content: editContent } : comment,
      ),
    );
  };

  const deleteComment = (id: number, parentId: number) => {
    if (parentId) {
      setComments(
        comments.map((comment: any) =>
          comment.id === parentId
            ? {
                ...comment,
                children: [...comment.children].filter(
                  (child) => child.id !== id,
                ),
              }
            : comment,
        ),
      );
      return;
    }

    setComments(comments.filter((comment: any) => comment.id !== id));
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        createComment,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
