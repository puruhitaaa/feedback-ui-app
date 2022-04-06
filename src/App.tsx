import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { AboutScreen, HomeScreen } from './screens';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
