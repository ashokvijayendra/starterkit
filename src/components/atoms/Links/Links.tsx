import React, { ReactNode } from 'react';
import styles from './links.module.css';
import Container from '../Container';
import Typography from '../Typography';

export type LinksProps = { direction?: string, items: any};

const Links: React.FC<LinksProps> = ({direction, items}: LinksProps) => {
  if(!items && !items.lenght) return null;
  return (
    <Container direction={direction || 'column'}>
      {items.map((link: any) => {
        return <a href={link.url}><Typography variant='paragraph'>{link.text}</Typography></a>;
      })}
    </Container>
  );
};


export default Links;