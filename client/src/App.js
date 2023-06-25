import {Routes,Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage'
import HostAnEvent from './pages/HostAnEvent';
import LoginPage from './pages/LoginPage';
import OngoingEvents from './pages/OngoingEvents';
import PageNotFound from './pages/PageNotFound';
import SignUpPage from './pages/SignUpPage';
import YourParticipations from './pages/YourParticipations';

export default function App(){
  return(
    <>
      <Routes>
        <Route path = '/*' element = {<PageNotFound />}   />
        <Route path = '/' element = {<HomePage />}   />
        <Route path = '/hostanevent' element = {<HostAnEvent />}   />
        <Route path = '/yourparticipations' element = {<YourParticipations />}   />
        <Route path = '/ongoingevents' element = {<OngoingEvents />}   />
        <Route path = '/about' element = {<AboutPage/>}   />
        <Route path = '/dashboard' element = {<DashboardPage/>}   />
        <Route path = '/login' element = {<LoginPage/>}   />
        <Route path = '/signup' element = {<SignUpPage/>}   />
      </Routes>
    </>
  );
}
