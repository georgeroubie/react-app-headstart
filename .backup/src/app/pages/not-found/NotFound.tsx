import { PageWrapper } from '@layout-components';
import { Description, Hyperlink, Title } from '@typography-components';
import { ReactElement } from 'react';

const NotFound = (): ReactElement => {
  return (
    <PageWrapper>
      <Title>Oops :(</Title>
      <Description>The page you are looking for does not exist!</Description>
      <Description>
        Click <Hyperlink href="/">here</Hyperlink> to go to home page.
      </Description>
    </PageWrapper>
  );
};

export default NotFound;
