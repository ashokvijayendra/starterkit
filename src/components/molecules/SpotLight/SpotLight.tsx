import React, { ReactNode } from 'react';
import styles from './spotlight.module.css';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';


export type SpotLightProps = { style: any};

const SpotLight: React.FC<SpotLightProps> = ({style, ...rest}: SpotLightProps) => {
  return (
    <Container direction='column' {...style}>
      <Container direction='row'>
        <Container direction='row' w={75} h={49}>
          <img src={"https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg"}/>
        </Container>
      </Container>
      <Typography variant='paragraph' w={305}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Typography>
    </Container>
  );
};


export default SpotLight;