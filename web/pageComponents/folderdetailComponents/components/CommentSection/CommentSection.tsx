import * as S from './CommentSection.style';
import { useEffect, useRef, useState } from 'react';
import { getDate } from '../../../../util/date';
import { CommentInput, Comment } from '../../../../components';
import { getFolderComment } from '../../../../apis/CommentAPI';
import { Comments, User } from '../../../../types';

interface Props {
  id?: number;
}

const CommentSection = ({ id }: Props) => {
  const [data, setData] = useState<Comments>(undefined);
  const [comments, setComments] = useState<any>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const commentRes = await getFolderComment(id);
        setData(commentRes);
        setComments(commentRes.comments);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const handleCreateComment = (
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
      inputRef.current.value = '';
      return;
    }
    setComments([...comments, newComment]);
    inputRef.current.value = '';
  };

  const handleUpdateComment = (
    id: number,
    parentId: number,
    editContent: string,
  ) => {
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

  const handleDeleteComment = (id: number, parentId: number) => {
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
    <>
      {data && (
        <S.Container>
          {!data.isPrivate && (
            <>
              <S.Title>{data.comments.length}개의 댓글</S.Title>
              <CommentInput
                version="comment"
                folderId={id}
                ref={inputRef}
                handleCreateComment={handleCreateComment}
              />
              {comments.map((comment: any) => {
                return (
                  <Comment
                    comment={comment}
                    folderId={id}
                    key={comment.id}
                    inputRef={inputRef}
                    handleCreateComment={handleCreateComment}
                    handleUpdateComment={handleUpdateComment}
                    handleDeleteComment={handleDeleteComment}
                  />
                );
              })}
            </>
          )}
        </S.Container>
      )}
    </>
  );
};

export default CommentSection;
