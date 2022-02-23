import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NearestRides from "./Pages/NearestRides";
import UpcomingRides from "./Pages/UpcomingRides";
import PastRides from "./Pages/PastRides";







const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>


        <Route path="/NearestRides" element={<NearestRides />} />
        <Route path="/UpcomingRides" element={<UpcomingRides />} />
        <Route path="/PastRides" element={<PastRides />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
