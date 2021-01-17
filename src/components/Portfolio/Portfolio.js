import * as React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function Portfolio() {
  const classes = useStyles();
  const images = [
    {
        url:'https://github.com/asanchez325/profile-generator/raw/main/assets/screenshot.PNG',
        title:'Profile Generator',
        content: "A Node.js command-line application that intakes information about employees on team and generates an HTML webpage of the team profile.",
        width: '35%',
        url2:'https://github.com/asanchez325/profile-generator',
      },
    {
      url:'https://github.com/asanchez325/Portfolio-Images/raw/main/assets/Capture1.JPG',
      title:'Run Buddy',
      content: 'A website that offers fitness training services. Built with HTML and CSS',
      width: '30%',
      url2:'https://asanchez325.github.io/run-buddy2/',
    },
    {
        url:'https://github.com/asanchez325/Portfolio-Images/raw/main/assets/Capture2.JPG',
        title:'Tech Blog',
        content: 'A CMS-style blog, where developers can publish their blog posts and comment on other developers’ posts as well.',
        width: '35%',
        url2:'https://pacific-ocean-98839.herokuapp.com/',
      },
    {
        url:'https://github.com/asanchez325/EmployeeTracker/raw/main/assets/Capture1.gif',
        title:'Employee Tracker',
        content: "A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
        width: '30%',
        url2:'https://github.com/asanchez325/EmployeeTracker',
      },
      {
        url:'https://github.com/asanchez325/note_taker/raw/master/assets/Capture2.PNG',
        title:'Note Taker',
        content: 'Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. ',
        width: '40%',
        url2:'https://github.com/asanchez325/note_taker/raw/master/assets/Capture1.PNG',
      },
      {
        url:'https://github.com/asanchez325/Social-Network-API/raw/main/assets/Capture1.gif',
        title:'Social Network API',
        content: "Back-End API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
        width: '30%',
        url2:'https://github.com/asanchez325/Social-Network-API',
      },

    ]
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Checkout Some of My Work!
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div className={classes.imageSrc}
              style= {{
                backgroundImage: `url(${image.url})`,
              }}
              />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton} >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                className={classes.imageTitle} 
              >
                 <a href={image.url2}>{image.title}</a>
                
                <div className={classes.imageMarked} />
              </Typography>
            </div>
            <div className={classes.imageContent}>
              <Typography
                component="h4"
                variant="h6"
                color="palette.info.dark"
                className={classes.imageContent}
              >
                {image.content}
                
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Portfolio;