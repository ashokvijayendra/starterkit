import React, { ReactNode } from 'react';
import styles from './links.module.css';
import Container from '../Container';
import SpotLight from '../../molecules/SpotLight';
import Typography from '../Typography';

export type LinksProps = { direction?: string};

const Links: React.FC<LinksProps> = (props: LinksProps) => {
  return (
    <Container direction={props.direction || 'column'}>
      <a href=''><Typography variant='paragraph'>How we help</Typography></a>
      <a href=''><Typography variant='paragraph'>How we help</Typography></a>
      <a href=''><Typography variant='paragraph'>How we help</Typography></a>
      <a href=''><Typography variant='paragraph'>How we help</Typography></a>
    </Container>
  );
};


export default Links;