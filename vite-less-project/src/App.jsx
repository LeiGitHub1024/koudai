import { useState } from 'react'
import Home from './pages/HomePage';
import Story from './pages/Story';
import Chat from './pages/Chat';
import MessageBoard from './pages/MessageBoard';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import "@arco-design/web-react/dist/css/arco.css";
import './App.css'
import StartPage from './components/StartPage/StartPage';


import ParrentMessageBoard from './parentPages/MessageBoard';
import Review from './parentPages/Review';


function App() {
  const [startPageVisible, setStartPageVisible] = useState(true)

  return (
    <>
      <StartPage visible={startPageVisible} setVisible={setStartPageVisible}></StartPage>

      <Router>
      {/* <div style={{width:'100%'}}>
            <Link to="/"><IconLeft /></Link>
        </div> */}
        <div className='App'>

          {/* 这里是孩子端 */}
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/review" element={<Review />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/messageboard" element={<MessageBoard/>} />
          </Routes>

          {/* 这里是父母端 */}
          {/* <Routes >
            <Route path="/review" element={<Review />} />
            <Route path="/" element={<ParrentMessageBoard/>} />
          </Routes> */}

        </div>
      </Router>
    </>
  )
}

export default App
