import React, { ReactNode } from 'react';
import styles from './deepfooter.module.css';
import Container from '../../atoms/Container';
import SpotLight from '../../molecules/SpotLight';
import Links from '../../atoms/Links';
import Typography from '../../atoms/Typography';
export type DeepFooterProps = {};

const DeepFooter: React.FC<DeepFooterProps> = (props: DeepFooterProps) => {
  return (
     <Container className={styles.container} w={'100%'}>
        <Typography variant='paragraph' style={{flexGrow: 1}}>© Copyright 2022 Walgreens Co. All rights reserved.</Typography>
        <Container>
          <Links  direction='row'/>
        </Container>
     </Container>
  );
};


export default DeepFooter;