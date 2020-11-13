import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/organisms/Navigation/Navigation';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import Home from './Home';
import Details from './Details';
import Items from './Items';
import Footer from '../components/organisms/Footer/Footer';

const Root = () => (
  <Router theme={theme}>
    <GlobalStyle />
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/items/:id" component={Details} />
      <Route path="/items" component={Items} />
    </Switch>
    <Footer />
  </Router>
);

export default Root;
