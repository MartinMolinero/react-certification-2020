import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Menu from '../Menu';
import ExplorePage from '../../pages/Explore/Explore.page';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import VideoDetailPage from '../../pages/VideoDetail/VideoDetail.page';
import SearchResultsPage from '../../pages/SearchResults/SearchResults.page';
import { VideosProvider } from '../../utils/state/videosProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <VideosProvider>
          <BrowserRouter>
            <Menu />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Private exact path="/explore">
                  <ExplorePage />
                </Private>
                <Private exact path="/search">
                  <SearchResultsPage />
                </Private>
                <Private exact path="/favorites">
                  <FavoritesPage />
                </Private>
                <Private exact path="/video/:id">
                  <VideoDetailPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </VideosProvider>
      </AuthProvider>
    </>
  );
}

export default App;
