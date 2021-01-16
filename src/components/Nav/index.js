import React from 'react';

function Header(props) {
  const { currentTab, setCurrentTab } = props;
    return (
      <React.Fragment>

         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li> <a className={currentTab === "about" }>
                  <span onClick ={() => setCurrentTab("about")}>About</span></a>
                </li>
                <li> <a className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("portfolio")}>Portfolio</span></a>
                </li>
                <li> <a className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("resume")}>Resume</span></a>
                </li>
                <li> <a className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("contact")}>Contact</span></a>
                </li>
            </ul>
         </nav>
      </React.Fragment>
    );
  }
  export default Header;