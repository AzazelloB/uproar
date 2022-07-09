import { FormattedMessage } from 'react-intl';

import { useAuthContext } from 'context/AuthContext';

import Dropdown from 'ui/Dropdown';
import Switch from 'ui/Switch';
import { useGlobalContext } from 'context/GlobalContext';

const UserInfo: React.FC = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const { user, logout } = useAuthContext();

  return (
    <Dropdown>
      <Dropdown.Toggle className="flex">
        <div className="flex items-center">
          <img src={user.profile_image_url} alt="" className="h-10 rounded-md mr-3" />
          {user.display_name}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="div" className="flex">
          <FormattedMessage
            id="header.sidebar"
            defaultMessage="Sidebar"
          />
          <Switch
            checked={showSidebar}
            onChange={() => setShowSidebar((prev) => !prev)}
            className="ml-4"
          />
        </Dropdown.Item>
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
