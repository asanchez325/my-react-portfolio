import React from 'react';
import adventureImage from '../../images/adventure.jpg';
import hikingImage from '../../images/hike.jpg';
import coffeeImage from '../../images/coffee.jpg';
import growthImage from '../../images/growth.jpg';
import educationImage from '../../images/yoga.jpg';
import computerImage from '../../images/computer.jpg';
import { Typography, Grid, Container } from '@material-ui/core';
import useStyles from './style';
import resumeData from "../../resumeData";


function About() {
const classes = useStyles();
    return (
      <section id="about">
         <header>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
            </div>
         </div>
         </header>
      <section className={classes.root}>
         <div className="row">
            <div className="three columns">
               <img className={classes.image2}  src="images/profilepic.jpg" alt="" />
            </div>


            <div className="nine columns main-col">
               <h2>About Me</h2>
                  <p>
                     {resumeData.aboutme}
                  </p>
            </div>
         </div>
         </section>
   <section className={classes.root}>
    <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          My Hobbies and Interests
        </Typography>
        <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={adventureImage} alt='kai'
              />
              <Typography variant="h5" className={classes.title}>
                Adventure + Travel Addict
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={hikingImage} alt='zen'
              />
              <Typography variant="h5" className={classes.title}>
                Anything Outdoors
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={growthImage} alt='gratitude'
              />
              <Typography variant="h5" className={classes.title}>
                Always Striving for Self Growth
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={coffeeImage} alt='gratitude'
              />
              <Typography variant="h5" className={classes.title}>
                Coffee Enthusiast
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={educationImage} alt='gratitude'
              />
              <Typography variant="h5" className={classes.title}>
                Zen Master
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={computerImage} alt='gratitude'
              />
              <Typography variant="h5" className={classes.title}>
                Tech Nerd
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      </Container>
    </section>
    
</section>
    );
  }

export default About;