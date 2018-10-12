import React from 'react';
import {Grid, Menu, Label, Input } from 'semantic-ui-react';

const style = {};
const sidebarWidth = 250;
style.menu = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  bottom: 0,
  left: 0,
  width: sidebarWidth,
  overflowX: 'hidden',
}

class LayoutSidebar extends React.Component {
  render() {
    return (
      <div>
        <div style={style.menu}>
          <Menu
            vertical
            text
            compact
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
        <div style={{ marginLeft: 250, }}>
          <Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default LayoutSidebar;
