import React from "react";
import {Link} from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({currentUser}) => (
  if(!currentUser.isAuthenticated){
    return (
      <div className="home-hero">
        <h1></h1>
        <h4></h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up
        </Link>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline profileImageUrl={currentUser.user.profileImageUrl}
      username={currentUser.user.username} />
    </div>
  );
);

export default Homepage;
