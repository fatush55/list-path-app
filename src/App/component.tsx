import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ROUTER from 'constants/router';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTER.INDEX} element={<Main />} />
      <Route path={ROUTER.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTER.ALL} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
