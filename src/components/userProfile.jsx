import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateUser } from "../redux/userSlice";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const EditInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const EditButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 3px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Dispatch an action to update the user information in the Redux store
    dispatch(updateUser({ name: editedName, email: editedEmail }));

    // Exit the editing mode
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImage src={user.img} alt="Profile" />
        <ProfileDetails>
          {isEditing ? (
            <EditForm>
              <EditInput
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <EditInput
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
              <EditButton type="button" onClick={handleSave}>
                Save
              </EditButton>
            </EditForm>
          ) : (
            <>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </>
          )}
        </ProfileDetails>
      </ProfileInfo>
      {!isEditing && (
        <EditButton type="button" onClick={handleEdit}>
          Edit Profile
        </EditButton>
      )}
    </ProfileContainer>
  );
};

export default UserProfile;
