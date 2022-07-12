import React, { ReactNode } from 'react';
import styles from './footer.module.css';
import Container from '../../atoms/Container';
import SpotLight from '../../molecules/SpotLight';
import Links from '../../atoms/Links';

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

const Links2Props = [ {
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

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <Container className={styles.container}>
      <SpotLight style={{ flexGrow: 1 }} {...SpotLightProps} />
      <Container className={styles.media} mR={72} childrenWidth={"equal"}>
        <Links  items={Links1Props}/>
      <div className={styles.links}>
       <Links items={Links2Props}/>
      </div>
      
     </Container>
    </Container>
  );
};

export default Footer;