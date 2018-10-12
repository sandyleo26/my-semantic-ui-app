import React from 'react';
import {Grid, Menu, Label, Input, Container } from 'semantic-ui-react';

const style = {};
const topMenuHeight = 50;
const sidebarWidth = 250;
const sidebarMarginLeft = 15;
style.topMenu = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  // left: sidebarMarginLeft + sidebarWidth,
  left: 0,
  height: topMenuHeight,
  display: 'flex',
};

style.sidebarMenu = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: topMenuHeight,
  bottom: 0,
  left: 0,
  marginLeft: sidebarMarginLeft,
  width: sidebarWidth + sidebarMarginLeft,
  overflowX: 'hidden',
};

style.sidebarMain = {
  marginLeft: style.sidebarMenu.width,
  marginTop: style.topMenu.height,
  minWidth: style.sidebarMenu.width + 300,
}



class LayoutSidebar extends React.Component {
  render() {
    return (
      <div>
        <div style={style.topMenu}>
          <div style={{ width: sidebarMarginLeft + sidebarWidth, }}></div>
          <Menu text>
            <Menu.Item>My Home</Menu.Item>
            <Menu.Item>My Home</Menu.Item>
            <Menu.Item>My Home</Menu.Item>
          </Menu>
        </div>

        <div style={style.sidebarMenu}>
          <Menu
            vertical
            text
            >
            <Menu.Item name='inbox'>
              <Label color='teal'>1</Label>
              Inbox
            </Menu.Item>

            <Menu.Item name='spam'>
              <Label>51</Label>
              Spam
            </Menu.Item>

            <Menu.Item name='updates'>
              <Label>1</Label>
              Updates
            </Menu.Item>

            <Menu.Item>
              <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
          </Menu>
        </div>

        <div style={style.sidebarMain}>
          <Grid column={1}>
            <Grid.Column>

            Application Content
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LayoutSidebar;
