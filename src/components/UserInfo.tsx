import { FormattedMessage } from 'react-intl';

import { useAuthContext } from 'context/AuthContext';

import Dropdown from 'ui/Dropdown';

const UserInfo: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className="flex items-center">
          <img src={user.profile_image_url} alt="" className="h-10 rounded-md mr-3" />
          {user.display_name}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={logout}>
          <FormattedMessage
            id="header.logout"
            defaultMessage="Logout"
          />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserInfo;
