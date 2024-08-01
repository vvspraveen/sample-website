// import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Element, scroller } from 'react-scroll';
// import './App.css';

// const NavBar = () => (
//   <nav>
//     <ul>
//       <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab1')}>Tab 1</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab2')}>Tab 2</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab3')}>Tab 3</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab4')}>Tab 4</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab5')}>Tab 5</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab6')}>Tab 6</Link></li>
//       <li><Link to="/" onClick={() => scrollToSection('tab7')}>Tab 7</Link></li>
//     </ul>
//   </nav>
// );

// const scrollToSection = (section) => {
//   scroller.scrollTo(section, {
//     duration: 800,
//     delay: 0,
//     smooth: 'easeInOutQuart',
//   });
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Element name="home" className="section">
//           <h1>Tsutsuji | Doge's sister</h1>
//           <div className="center-buttons">
//             <button>Button 1</button>
//             <button>Button 2</button>
//             <button>Button 3</button>
//           </div>
//         </Element>
//         <Element name="tab1" className="section">
//           <h1>Tab 1 Content</h1>
//         </Element>
//         <Element name="tab2" className="section">
//           <h1>Tab 2 Content</h1>
//         </Element>
//         <Element name="tab3" className="section">
//           <h1>Tab 3 Content</h1>
//         </Element>
//         <Element name="tab4" className="section">
//           <h1>Tab 4 Content</h1>
//         </Element>
//         <Element name="tab5" className="section">
//           <h1>Tab 5 Content</h1>
//         </Element>
//         <Element name="tab6" className="section">
//           <h1>Tab 6 Content</h1>
//         </Element>
//         <Element name="tab7" className="section">
//           <h1>Tab 7 Content</h1>
//         </Element>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import About from './components/About';
import Home from './components/Home';
import FAQ from './components/FAQ';
import './App.css';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('tab1')}>Tab 1</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('tab2')}>Tab 2</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('tab3')}>Tab 3</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('about')}>About</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('tab5')}>Tab 5</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('tab6')}>Tab 6</Link></li>
      <li><Link to="/" onClick={() => scrollToSection('faq')}>FAQ</Link></li>
    </ul>
  </nav>
);

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

// const Home = () => (
//   <div className="section" id="home">
//     <h1>Home</h1>
//     <div className="center-buttons">
//       <button>Button 1</button>
//       <button>Button 2</button>
//       <button>Button 3</button>
//     </div>
//   </div>
// );

const TabContent = ({ name }) => (
  <div className="section" id={name.toLowerCase().replace(' ', '-')}>
    <h1>{name} Content</h1>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      <NavBar />
      <div className="scrollable-content">
        <Element name="home">
          <Home />
        </Element>
        <Element name="tab1">
          <TabContent name="Tab 1" />
        </Element>
        <Element name="tab2">
          <TabContent name="Tab 2" />
        </Element>
        <Element name="tab3">
          <TabContent name="Tab 3" />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="tab5">
          <TabContent name="Tab 5" />
        </Element>
        <Element name="tab6">
          <TabContent name="Tab 6" />
        </Element>        
        <Element name="faq">
          <FAQ />
        </Element>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
