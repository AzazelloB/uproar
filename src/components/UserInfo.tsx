import { useAuthContext } from 'context/AuthContext';

const UserInfo: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div className="flex items-center">
      <img src={user.profile_image_url} alt="" className="h-10 rounded-md mr-3" />
      {user.display_name}
    </div>
  );
};

export default UserInfo;
