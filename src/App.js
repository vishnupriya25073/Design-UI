import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './componentss/RootLayout';
import Landinglayout from './landinglayout';
import DesignInspiration from './componentss/Designinspiration';
import DesignNews from './componentss/DesignNews';
import DesignSystem from './componentss/DesignSystem';
import ImageDetails from './componentss/ImageView';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landinglayout />} />
        <Route path="/DesignInspiration" element={<DesignInspiration />} />
        <Route path="DesignNews" element={<DesignNews />} />
        <Route path="DesignSystem" element={<DesignSystem />} />
        <Route path="image/:id" element={<ImageDetails />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
