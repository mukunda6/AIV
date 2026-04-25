import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing.pages";
import Audio from "./pages/audio";
import Video from "./pages/video";
import VideoInterview from "./pages/videoInterview";
import AudioInterview from "./pages/audioInterview";
import VideoDashboard from "./pages/videoDashboard";
import AudioDashboard from "./pages/audioDashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/audio" exact component={Audio} />
        <Route path="/video" exact component={Video} />
        <Route path="/interview/v" exact component={VideoInterview} />
        <Route path="/interview/a" exact component={AudioInterview} />
        <Route path="/video_dash" exact component={VideoDashboard} />
        <Route path="/audio_dash" exact component={AudioDashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
