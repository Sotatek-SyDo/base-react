// customize/hitowa/src/components/CustomHeader.tsx

import { Avatar, Button, Flex, Row } from 'antd';
import { AppButton } from '../../../../app/src/components/common/AppButton';
import '../../../../app/src/components/organisms/header/index.scss';

/**
 * Custom Header cho client Hitowa
 * Override logo và styling, giữ nguyên structure
 */
const CustomHeader = () => {
    return (
        <div id="header">
            <div className="container">
                <Flex justify="between" className="header-wrap">
                    <Row className="nav">
                        <Button href="#" type="link" className="logo" style={{ color: '#FF6B35' }}>
                            🏢 HITOWA Logo
                        </Button>
                        <Flex className="user-info">
                            <AppButton
                                href="#"
                                type="link"
                                className="capitalize user-name"
                                style={{ color: '#FF6B35' }}
                            >
                                Hitowa User
                            </AppButton>
                            <Avatar style={{ backgroundColor: '#FF6B35' }} />
                        </Flex>
                    </Row>
                </Flex>
            </div>
        </div>
    );
};

export default CustomHeader;
