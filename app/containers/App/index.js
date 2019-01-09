import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

const { Footer, Content } = Layout;

export default function App() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer>Copyright © all rights reserved.</Footer>
    </Layout>
  );
}
