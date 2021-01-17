import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import useStyles from './style';


function Contact() {
  const classes = useStyles();
    return (
      <Container className={classes.root} component="section">
        <Grid className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="h5">
                For collaboration, questions, suggestions, etc..
              </Typography>

            <div className="row education">
                <h3><a href="https://github.com/asanchez325" target="_blank" rel="noreferrer">GitHub</a></h3>
                <h3><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Linked In</a></h3>
                <h3><a href="mailto:amsanchez@knox.edu">Email</a></h3>
                <h2>Thanks for Visiting!</h2>
            </div>
            </form>
          </div>
        </Grid>
  </Container>
        );
  }

  export default Contact;
