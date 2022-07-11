import React, { ReactNode } from 'react';
import styles from './footer.module.css';
import Container from '../../atoms/Container';
import SpotLight from '../../molecules/SpotLight';
import Links from '../../atoms/Links';
export type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <Container className={styles.container} w={'100%'}>
        <SpotLight style={{flexGrow: 1}}/>
        <Container direction='row'>
          <Links />
          <Links />
        </Container>
    </Container>
  );
};


export default Footer;