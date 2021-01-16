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
      url:'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title:'Policies',
      content: 'Gastronomy bakflahsfkasfkhasflk',
      width: '40%',
      url2:'https://courses.bootcampspot.com/courses/232/pages/20-dot-1-7-reflection?module_item_id=64420',
    },]
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
                component="h3"
                variant="h6"
                color="inherit"
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