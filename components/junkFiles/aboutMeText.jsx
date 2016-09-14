import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  textAlign: 'left',
  display: 'inline-block',
  height: "100%",
  margin: '0 auto',
  position: 'relative',
  left: "25%",
  width: "50%",
  top: 50,
};

const divStyle = {

};
const headerStyle = {
position: 'relative',
fontWeight: 'lighter',
fontFamily: "'Roboto', sans-serif",
color: "rgb(0, 188, 212)",
left: "25%",
width: "50%",
top: 50,
margin: '0 auto',
   textAlign: 'left',
};

const PaperExampleSimple = () => (
    //<Paper style={style} zDepth={5}>
    <div>
    <h2><span style={headerStyle}>About me</span></h2>
    <div style={style} >
      <p>Hello,</p>
  <p>
  I am Deepika Singh, and thank you so much taking the time to look at my work.
   I am so excited to meet you and share with you about my work.
   I specializes in on-location photography, capturing the real you in real surroundings: your home,
  a beautiful park, or special event. Currently I am working in Phoenix metro area.
  I am in it to make new friends, have new experiences.
  I would love to get to know you and to hear more about your story. Can’t wait to meet you.
      </p>
    </div>
    </div>
    //</Paper>
);

export default PaperExampleSimple;
