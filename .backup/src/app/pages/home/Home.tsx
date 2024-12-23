import { PageWrapper } from '@layout-components';
import { Description, Hyperlink, Subtitle, Title } from '@typography-components';
import { Donation } from '@ui-components';
import { ReactElement } from 'react';
import styles from './Home.module.scss';

const Home = (): ReactElement => {
  return (
    <PageWrapper>
      <Title>React boilerplate</Title>
      <Subtitle>About</Subtitle>
      <Description>
        This is the React boilerplate that I use in every React project as a starting point. Some of the basic features
        are:
      </Description>
      <ul className={styles.list}>
        <li>Folder structure based on some best practices</li>
        <li>PWA features (favicon multiple devices, service worker etc)</li>
        <li>Social media meta tags</li>
        <li>CSS Modules</li>
        <li>Light/Dark Theme</li>
        <li>TypeScript</li>
        <li>Routing with React Router</li>
        <li>Basic Icon Components</li>
        <li>Basic UI Components</li>
        <li>
          <Hyperlink href="https://lottiefiles.com" target="_blank">
            Lottie
          </Hyperlink>
          &nbsp; Animations
        </li>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>Testing with Vitest</li>
      </ul>
      <Subtitle>Creator</Subtitle>
      <Description>
        My name is George Roubie and you can follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank">
          LinkedIn
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank">
          Medium
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie" target="_blank">
          Codepen
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://github.com/georgeroubie" target="_blank">
          GitHub
        </Hyperlink>
        .
      </Description>
      <Donation />
    </PageWrapper>
  );
};

export default Home;
