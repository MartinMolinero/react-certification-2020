import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the challenge!</h1>
      {authenticated ? <Redirect to="/explore" /> : <Link to="/login">let me in →</Link>}
    </section>
  );
}

export default HomePage;
