import React, { ReactNode } from 'react';
import styles from './spotlight.module.css';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';

export type SpotLightProps = { style: any,
  logo_image_path: any, 
  logo_image_alt_tex: any, 
  logo_image_url: any,  
  subheading: any,
  className?: string
};

const SpotLight: React.FC<SpotLightProps> = ({style, logo_image_path, logo_image_alt_tex, logo_image_url,  subheading, className}: SpotLightProps) => {
  return (
    <Container className={className} direction='column' {...style}>
      <Container direction='row' >
        <Container direction='row'>
          <a href={logo_image_url}><img src={logo_image_path} className={styles.logo}  alt={logo_image_alt_tex} /></a>
        </Container>
      </Container>
      <Typography variant='paragraph' maxWidth={360} className={styles.text}>{subheading} </Typography>
    </Container>
  );
};


export default SpotLight;