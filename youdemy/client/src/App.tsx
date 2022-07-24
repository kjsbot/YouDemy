import React from 'react';
import './styles/app.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewCourse from './pages/NewCourse';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';

const client = new ApolloClient({
  uri: "http://localhost:4000", // url of backend
  cache: new InMemoryCache() // used to cache query results after fetching them
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={[<Header />, <HomePage />]} />
            <Route path="/new" element={[<Header />, <NewCourse />]} />
            <Route path="/signup" element={[<Header />, <Signup />]} />
            <Route path="/login" element={[<Header />, <Login />]} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
