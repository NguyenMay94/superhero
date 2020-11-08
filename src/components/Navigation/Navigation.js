import React, { useState }  from 'react';
import { Layout, Menu} from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';

const { Header } = Layout;

function Navigation(props) {
    const [classMenu, setClassMenu] = useState('');

    const toggleMenu = () => {
        setClassMenu(!classMenu? 'show': '');
    }

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className='section-header'>
            <UnorderedListOutlined className="section-header--list-outlined" onClick={toggleMenu}/>
            <Link className="section-header--logo" to="/"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={`section-header--menu ${classMenu}`}>
                <Menu.Item key="1" onClick={toggleMenu}><Link to="/new">Create New</Link></Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navigation;