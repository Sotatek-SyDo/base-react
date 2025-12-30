import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { resolveComponent } from '@/core/resolveComponent';
import { useClientConfig } from '@/core/ClientContext';
import MenuAdmin from './components/MenuAdmin';
import './scss/homepage.scss';

const { Content, Sider } = Layout;

const HomePage = () => {
  const clientConfig = useClientConfig();
  const Header = resolveComponent('Header', clientConfig);

  return (
    <Layout className="main-layout">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
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
