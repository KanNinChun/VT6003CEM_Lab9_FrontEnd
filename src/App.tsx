import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Article from './component/ Articles';
import NewArticle from './component/newarticle';
import Login from './component/Login';
import Register from './component/Register';
const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/newarticle">NewArticle</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newarticle" element={<NewArticle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Content>
      
      <Footer>
        <p>VT6003CEM Demo</p>
      </Footer>

    </Router>
  );
}
export default App;