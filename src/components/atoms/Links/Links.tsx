import React, { ReactNode } from 'react';
import styles from './links.module.css';
import Container from '../Container';
import Typography from '../Typography';

export type LinksProps = { direction?: string, items: any, className?: string, style?: any};

const Links: React.FC<LinksProps> = ({direction, items, className = "", style}: LinksProps) => {
  if(!items && !items.lenght) return null;
  return (
    <Container direction={direction || 'column'} className={className} tag="ul" {...style}>
      {items.map((link: any) => {
        return <li className={styles.link}><a href={link.url} ><Typography variant='paragraph'>{link.text}</Typography></a></li>;
      })}
    </Container>
  );
};


export default Links;