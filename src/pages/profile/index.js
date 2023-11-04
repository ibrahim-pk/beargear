// pages/UserProfile.js

import UserProfileLayout from "@/Component/Layout/UserProfileLayout";



const UserProfile = () => {
  return (
    <h1>User Profile</h1>
  );  
};

export default UserProfile;


UserProfile.getLayout = function getLayout(page) {
    return <UserProfileLayout>{page}</UserProfileLayout>;
  };