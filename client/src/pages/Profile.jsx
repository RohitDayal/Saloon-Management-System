import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { userInfo, logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
  };
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Profile</h1>

      {userInfo ? (
        <div>
          <p>Name: {userInfo.Name}</p>
          <p>UserName: {userInfo.UserName}</p>
          <p>Email: {userInfo.Email}</p>
          {/* Add other user information as needed */}
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
