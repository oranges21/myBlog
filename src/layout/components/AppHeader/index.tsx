import { useState } from 'react';
const { Header } = Layout;
import { Button, Layout, theme, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const url = '/ywx.jpg';

export interface IAppHeaderProps {
  onCollapsed?: (collapsed: boolean) => void
}

export default function AppHeader (props: IAppHeaderProps) {
        const [collapsed, setCollapsed] = useState(false);
        const {
            token: { colorBgContainer, borderRadiusLG },
          } = theme.useToken();
        const toggleCollapsed = () => {
          const newCollapsed = !collapsed;
          setCollapsed(newCollapsed);
          if(props.onCollapsed){
            props.onCollapsed(newCollapsed)
          }
        }
  return (   
    <Header style={{ padding: 0, background: colorBgContainer }} className="header-contanier">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
            <div className="rightMenu">
            <span style={{fontFamily:"'Courier New', Courier, monospace",marginRight:'12px',fontWeight:'blod'}}>管理员</span>
            <Avatar style={{marginRight:'19px'}} src={<img src={url} alt="avatar" />} />
            </div>
        </Header>
  );
}
