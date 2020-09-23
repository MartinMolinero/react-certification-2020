import React, { useLayoutEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Menu from '../Menu';
import ExplorePage from '../../pages/Explore/Explore.page';
import FavoritesPage from '../../pages/Favorites/Favorites.page';
import VideoDetailPage from '../../pages/VideoDetail/VideoDetail.page';
import VideosReducer from '../../utils/state/VideosReducer';
import VideosContext from '../../utils/state/VideosContext';
import SearchResultsPage from '../../pages/SearchResults/SearchResults.page';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const [state, dispatch] = useReducer(VideosReducer, {});

  return (
    <>
      <AuthProvider>
        <VideosContext.Provider value={{ state, dispatch }}>
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
                <Route exact path="/video/:id">
                  <VideoDetailPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </VideosContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
