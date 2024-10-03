import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Blog from '../blog/Blog';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Blog/>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;