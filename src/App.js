import React from 'react';
// import './components/assets/scss/common.css';  // public foder ki file/folder ko import nhi kartay h
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './components/layout';
import SignUpForm from './components/signup';
import SignInForm from './components/signin';
import Home from './components/home';
import SupportTicketForm from './components/ticket_supp';
import BankDetailsForm from './components/addbank';
import Addmoney from './components/addmoney';
import UserForm from './components/register';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/SignInForm' element={<SignInForm />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/SupportTicketForm' element={<SupportTicketForm />} />
        <Route path='/BankDetailsForm' element={<BankDetailsForm />} />
        <Route path='/Addmoney' element={<Addmoney/>} />
        <Route path='/UserForm' element={<UserForm/>} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
