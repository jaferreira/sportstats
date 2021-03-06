import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

import Footer from './common/footer';
import Header from './common/header';
import Sidebar from './common/sidebar';

import Home from './routes/home';
import GameList from './routes/nextGames';
import MatchInfo from './routes/matchInfo';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}



export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='nextgames' component={GameList}></Route>
    <Route path='matchinfo/:perma' component={MatchInfo}></Route>
  </Route>
);
