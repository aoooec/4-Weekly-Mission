const Profile = ({ profile }) => {
  const { email, profileImageSource } = profile;
  return (
    <div className="Profile">
      <img className="Profile__image" alt="프로필 사진" />
      <span className="Profile__email">{email}</span>
    </div>
  );
};

export default Profile;
