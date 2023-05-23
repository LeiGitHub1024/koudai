import './App.css';
import Home from './pages/Home';
import Story from './pages/Story';
import Review from './pages/Review';
import Chat from './pages/Chat';
import NewMessage from './pages/NewMessage';
import MessageBoard from './pages/MessageBoard';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import "@arco-design/web-react/dist/css/arco.css";
import {IconLeft } from '@arco-design/web-react/icon';

function App() {
  return (
    <div >
      
      <Router>
      <div style={{width:'100vw'}}>
          <Link to="/"><IconLeft /></Link>
          {/* <Link to="/story">Story</Link>
          <Link to="/review">Review</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/newmessage">NewMessage</Link>
          <Link to="/messageboard">MessageBoard</Link> */}

      </div>
        <div className='App'>
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/review" element={<Review />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/newmessage" element={<NewMessage />} />
            <Route path="/messageboard" element={<MessageBoard/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
