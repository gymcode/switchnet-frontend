import React, { Fragment, useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/main.css";

const Navigation = () => {
  const [navbar, setNav] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);

  return (
    <Fragment>
      <header className={navbar ? 'navbar active' :  'navbar'}>
        {/* // swtichnet image  */}
        <div>
          <a href="/">switchnet</a>
        </div>
        {/* header linnks  */}
        <nav>
          <ul className="nav__links">
            <li>
              <a className="capitalize text-xs" href="/services">
                services
              </a>
            </li>
            <li>
              <a className="capitalize text-xs" href="/stock">
                stock
              </a>
            </li>
            <li>
              <a className="capitalize text-xs" href="/contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
        {/* header left for auth  */}
        <div>
          <div>
            <a href="/about">why switchnet</a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navigation;
