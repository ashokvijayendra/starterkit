import React, { ReactNode } from 'react';
import styles from './deepfooter.module.css';
import Container from '../../atoms/Container';
import SpotLight from '../../molecules/SpotLight';
import Links from '../../atoms/Links';
import Typography from '../../atoms/Typography';
export type DeepFooterProps = { copyright: string, items: any};

const DeepFooter: React.FC<DeepFooterProps> = ({copyright, items}: DeepFooterProps) => {
  return (
     <Container className={styles.container}>
        <Typography variant='paragraph' pT={10} pB={10} style={{flexGrow: 1}}>{copyright}</Typography>
        <Container>
          <Links  className={styles.links} direction='row' items={items}/>
        </Container>
     </Container>
  );
};

export default DeepFooter;