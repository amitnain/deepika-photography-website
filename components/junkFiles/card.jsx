import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader/>
      <CardMedia overlay={<CardTitle title="My beautiful Wife"/>}>
        <img src="images/1.jpg" />
      </CardMedia>
    <CardTitle/>
  </Card>
);
export default CardExampleWithAvatar;
