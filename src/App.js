import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Navbar } from './components/navbar';
import RouterView from './router';
import { VideoContext } from './context/videoContext';
import { useState } from 'react';
function App() {

  const notify = () => {
    toast.success('Success Notification!');
  };
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ')
  const [videoId, setVideoId] = useState('')
  return (
    <div className="App">
      <VideoContext.Provider value={{ videoUrl, setVideoUrl, videoId, setVideoId }}>
        <Navbar />
        <RouterView />
        <ToastContainer />
        {/* <button onClick={() => notify()}>Toast</button> */}
      </VideoContext.Provider>
    </div>
  );
}

export default App;
