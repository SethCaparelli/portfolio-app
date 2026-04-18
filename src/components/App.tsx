import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Gallery defaultCategory="app" />} />
          <Route path=":category" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
