import { FormattedMessage } from 'react-intl';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import { useAuthContext } from 'context/AuthContext';

import Dropdown from 'ui/Dropdown';

const UserInfo: React.FC = () => {
  const { user, logout } = useAuthContext();

  return (
    <Dropdown>
      {({ open }) => (
        <>
          <Dropdown.Toggle className="flex">
            <div className="flex items-center">
              <img src={user.profile_image_url} alt="" className="h-10 rounded-md" />
              <span className="mx-3">{user.display_name}</span>
              {open ? <GoTriangleUp size={12} /> : <GoTriangleDown size={12} />}
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
        </>
      )}
    </Dropdown>
  );
};

export default UserInfo;
