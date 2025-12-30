import { Avatar, Button, Flex, Row } from 'antd';

import { AppButton } from '@/components/common/AppButton';
import './index.scss';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <Flex justify="between" className="header-wrap">
          <Row className="nav">
            <Button href="#" type="link" className="logo">
              Logo
            </Button>
            <Flex className="user-info">
              <AppButton href="#" type="link" className="capitalize user-name">
                User Name
              </AppButton>
              <Avatar />
            </Flex>
          </Row>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
