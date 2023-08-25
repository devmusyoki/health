import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar';
import {
  Routes,
  Route
} from "react-router-dom";


const About = React.lazy(() => import ("./pages/About"))
const Home = React.lazy(() => import ("./pages/Home"))
const Policies = React.lazy(() => import ("./pages/Policies"))
const Profile = React.lazy(() => import ("./pages/Profile"))
const Contact = React.lazy(() => import ("./pages/Contact"))

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Routes>
          <Route path="/" element={
             <React.Suspense fallback = 'Loading ...'>
               <Home/>
          </React.Suspense>
        }
        />
         <Route path="/about" element={
            <React.Suspense fallback = 'Loading ...'>
              <About/>
          </React.Suspense>
         }  /> 
         <Route path="/policies" element={
            <React.Suspense fallback = 'Loading ...'>
              <Policies/>
          </React.Suspense>
         }  /> 
         <Route path="/profile" element={
            <React.Suspense fallback = 'Loading ...'>
              <Profile/>
          </React.Suspense>
         }  /> 
         <Route path="/section" element={
            <React.Suspense fallback = 'Loading ...'>
              <Contact/>
          </React.Suspense>
         }  /> 

      </Routes>
    </div>
  );
}

export default App;
