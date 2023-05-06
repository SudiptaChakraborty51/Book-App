import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Profile = () => {
  const { userData } = useContext(UserContext);
  const { name, bio, img } = userData;

  return (
    <div>
      <h1>Profile</h1>
      <img src={img} alt="profile pic" height="300" width="400" />
      <h3>Name: {name}</h3>
      <p>
        <strong>Bio: </strong>
        {bio}
      </p>
    </div>
  );
};
