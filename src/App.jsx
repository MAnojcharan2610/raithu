import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/home/home";
import Navbar from "./components/navbar/navbar";
import Abstract from "./routes/Abstract/Abstract";
import Introduction from "./routes/Introduction/Introduction";
import Questionnarie  from "./routes/Questionnarie/Questionnarie";
import SurveyPhotos from './routes/survey-photos/survey-photos';
import SurveyData from "./routes/Survey-data/Survey-data";
import Conclusion from "./routes/Conclusion/Conclusion";
import Team from "./routes/Team/Team";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Navbar/>} path="/">
            <Route index element={<Home/>} />
            <Route path="/abstract" element={<Abstract/>}/>
            <Route path="/introduction" element={<Introduction/>}/>
            <Route path="/questionnaire" element={<Questionnarie/>}/>
            <Route path='/survey-photos' element={<SurveyPhotos/>}/>
            <Route path='/survey-data' element={<SurveyData/>}/>
            <Route path='/conclusion' element={<Conclusion/>}/>
            <Route path='/team' element={<Team/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
