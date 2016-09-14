import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'relative',
  margin: '16px 32px 16px 0',
};

const MenuExampleSimple = () => (
  <div id="portfolio">
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleSimple;
