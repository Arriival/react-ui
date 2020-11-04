import React from 'react';
import './App.css';
import Header from "./header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Content from "./content/Content";
import Footer from "./footer/Footer";


function App() {
    const menus = [
        {
            title: 'Home',
            active: 'active'
        },
        {
            title: 'Contact us',
            active: ''
        },
        {
            title: 'About us',
            active: ''
        },

    ]
    return (
        <div className="App">
            <Header menus={menus} title="MAKE YOUR FOOD"/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
