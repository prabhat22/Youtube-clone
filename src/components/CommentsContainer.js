import React from "react";
import Profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center gap-3 mb-3 ml-2">
      <img className=" w-8 h-8" src={Profile} alt="profile" />
      <div>
        <p className="font-bold text-sm mb-1">{comment.commentedBy}</p>
        <p className="text-base text-gray-500 mb-1">{comment.comment}</p>
        <p className="flex items-center gap-4 text-gray-700">
          <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer" />
          <FontAwesomeIcon icon={faThumbsDown} className="cursor-pointer" />
          <span  className="cursor-pointer"> Reply</span>
        </p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index} className="ml-4  border-l-4">
            <Comment comment={comment} />
            {comment?.replies && comment.replies.length > 0 && (
              <CommentList comments={comment.replies} />
            )}
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  const commentList = [
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
      replies: [
        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
        },
        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
        },
        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
        },
        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
        },
        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
        },

        {
          commentedBy: "Prabhat Lokwani",
          comment: "This video is awesome",
          commentAt: new Date().toDateString(),
          replies: [
            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },
            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },
            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },
            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },
            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },

            {
              commentedBy: "Prabhat Lokwani",
              comment: "This video is awesome",
              commentAt: new Date().toDateString(),
            },
          ],
        },
      ],
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
    {
      commentedBy: "Prabhat Lokwani",
      comment: "This video is awesome",
      commentAt: new Date().toDateString(),
    },
  ];

  return (
    <div className="">
      <CommentList comments={commentList} />
    </div>
  );
};

export default CommentsContainer;
