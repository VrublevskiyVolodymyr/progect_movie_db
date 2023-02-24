import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MovieCardPage, MoviesListPage, SearchPage, SearchByGenrePage} from "./pages";
import {MainLayout} from "./layouts";
import './App.css';

const App = () => {

  return (

      <div className="app_container">

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'movies'}/>}/>
                  <Route path={'movies'} element={<MoviesListPage/>}/>
                  <Route path={'movies_card'} element={<MovieCardPage/>}/>
                  <Route path={'movies/:id'} element={<MovieCardPage/>}/>
                  <Route path={'search_movie/:title'} element={<SearchPage/>}/>
                  <Route path={'search_movie_by_genre/:idGenre/:nameGenre'} element={<SearchByGenrePage/>}/>
              </Route>
          </Routes>

      </div>
  );
};

export {App};
