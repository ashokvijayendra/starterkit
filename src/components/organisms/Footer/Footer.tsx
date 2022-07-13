import React, { ReactNode } from 'react';
import styles from './footer.module.css';
import Container from '../../atoms/Container';
import SpotLight from '../../molecules/SpotLight';
import Links from '../../atoms/Links';
import DeepFooter from './../DeepFooter';

export type FooterProps = {};

const SpotLightProps = {
  "logo_image_path": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "logo_image_alt_tex": "",
  "logo_image_url": "/content/wag-spa-react/us/en",
  "subheading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
};

const Links1Props = [{
  "url": "/how-we-help-2/how-we-help",
  "text": "How we help",
},
{
  "url": "/research-insights/research-and-insights",
  "text": "Research & Insights",
},
{
  "url": "/quick-access-forms",
  "text": "Forms",
},
{
  "url": "/contact",
  "text": "Contact Us",
},];

const Links2Props = [{
  "url": "url1",
  "text": "Footer Link 1",
},
{
  "url": "url2",
  "text": "Footer Link 1",
},
{
  "url": "url3",
  "text": "Footer Link 1",
},
{
  "url": "https://www.walgreens.comurl4",
  "text": "Visit Walgreens.com",
},];


const DeepFooterProps = {
  "copyright": "© Copyright 2022 Walgreens Co. All rights reserved.",
  "items": [{
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "Notice of Privacy Practices"
  },
  {
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "Terms of Use"
  },
  {
    "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
    "text": "Online Privacy & Security"
  }],
};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <Container tag="footer" className={styles.container} direction="column">
      <Container className={styles.innerContainer} direction="column">
        <Container className={`${styles.wrapper} ${styles.grid}`}>
          <SpotLight className={styles.spotlight} style={{ flexGrow: 1 }} {...SpotLightProps} />
          <Links items={Links1Props} className={`${styles.links} ${styles.column2}`}/>
          <Links items={Links2Props} className={`${styles.links} ${styles.column3}`} />
        </Container>
        <DeepFooter {...DeepFooterProps} />
      </Container>
    </Container>
  );
};

export default Footer;