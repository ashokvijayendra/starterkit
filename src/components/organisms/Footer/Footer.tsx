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
  "subheading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
};

const Links1Props = [{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
}];

const Links2Props = [{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
},
{
  "url": "https://assets.website-files.com/629ff19cdb820268d08e9efc/629ff5dcedd887726abd7dce_Logo.svg",
  "text": "How can we help"
}];

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <Container className={styles.container} w={'100%'}>
      <SpotLight style={{ flexGrow: 1 }} {...SpotLightProps} />
      <Container direction='row' childrenWidth={"equal"}>
        <Links items={Links1Props}/>
        <Links items={Links2Props}/>
      </Container>
    </Container>
  );
};

export default Footer;