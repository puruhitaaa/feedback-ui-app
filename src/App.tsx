import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutIconLink, Header } from './components';
import { FeedbackProvider } from './context/FeedbackContext';
import Compose from './helpers/CombineProviders';
import { AboutScreen, HomeScreen } from './screens';
import NotFound from './screens/NotFound';

export default function App() {
  return (
    <Compose components={[BrowserRouter, FeedbackProvider]}>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
      </Routes>
      <AboutIconLink />
    </Compose>
  );
}
