import PageWrapper from '@app/components/layout/page-wrapper/PageWrapper';
import Description from '@app/components/typography/description/Description';
import Hyperlink from '@app/components/typography/hyperlink/Hyperlink';
import Title from '@app/components/typography/title/Title';
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
