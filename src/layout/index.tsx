import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import AppSider from "./components/AppSider"
import AppHeader from "./components/AppHeader"

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = (collapsed) => {
    setCollapsed(collapsed);
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
          {!collapsed && <span >博客后台管理系统</span>}          
        </div>
       <AppSider />
      </Sider>
      <Layout>
        <AppHeader onCollapsed={handleCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;