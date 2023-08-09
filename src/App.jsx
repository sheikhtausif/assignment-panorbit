import {Routes, Route, useLocation} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Posts from './pages/posts';
import Gallery from './pages/gallery';
import ToDo from './pages/todo';

import './App.css';

function App() {
  const {pathname} = useLocation()

  return (
    <div className="main-container">
      {pathname !== '/' ? <Sidebar /> : null}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
