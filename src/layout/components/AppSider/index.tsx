import * as React from 'react';
import { Menu } from 'antd';
import {
  OrderedListOutlined,
  UserOutlined,
  AreaChartOutlined,
  UngroupOutlined
} from '@ant-design/icons';

export interface IAppSiderProps {
}

export default function AppSider (props: IAppSiderProps) {
  return (
    <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
    items={[
      {
        key: '1',
        icon: <OrderedListOutlined />,
        label: '动态管理',
      },
      {
        key: '2',
        icon: <UserOutlined />,
        label: '账号管理',
      },
      {
        key: '3',
        icon: <AreaChartOutlined />,
        label: '背景图片管理',
      },
      {
        key: '4',
        icon: <UngroupOutlined />,
        label: '分类管理',
      },
    ]}
  />
  );
}
