import { 
  Route, 
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InboxPage from './pages/InboxPage';
import './index.css';

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/inbox" element={<InboxPage />} />
    </>
  ),
  {
    // Enable future flags for React Router v7 compatibility
    future: {
      // These are the supported future flags in v6.30.1
      v7_normalizeFormMethod: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;