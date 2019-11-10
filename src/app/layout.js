import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Menu, Segment, Input, Icon} from 'semantic-ui-react';

import App from "./app";
import './styles/layout.css';

const MainLaoyout = () => (
    <div>
        <Menu inverted>
            <Menu.Item href ="#"><Icon name="angellist" />AppLogoHere</Menu.Item>
            <Menu.Item name='home' active onClick={() => {}} />
            <Menu.Item name='messages' active onClick={() => {}} />
            <Menu.Item name='friends' active onClick={() => {}}/>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        <Segment>
            <App />
        </Segment>
    </div>
);

export default MainLaoyout;