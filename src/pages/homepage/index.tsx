import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Header from '@/components/organisms/header';
import MenuAdmin from './components/MenuAdmin';
import './scss/homepage.scss';

const { Content, Sider } = Layout;
const HomePage = () => {
  return (
    <Layout className="main-layout">
      <Header />
      <Content>
        <Layout className="container">
          <Sider width={296} className="sider-admin">
            <MenuAdmin />
          </Sider>
          <Content className="main-content">
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default HomePage;
