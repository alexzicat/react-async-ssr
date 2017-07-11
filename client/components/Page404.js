import React from 'react';
import Page from './Page';

const ErrorPage = Page.extend`
  color: #ff1b61;
`;

const Page404 = ({staticContext}) => {
  if (staticContext) {
    staticContext.statusCode = 404;
  }

  return <ErrorPage title='Page 404'/>;
};

export default Page404;
