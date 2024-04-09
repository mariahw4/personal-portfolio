import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Nav() {
  return (
    <>
      <NavLinks
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Mariah Wear
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
         <Link key={3} className="nav-link text-light" to="/portfolio">
         Portfolio
       </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
        Contact
      </Link>,
       <Link key={5} className="nav-link text-light" to="/resume">
       Resume
     </Link>,
      <Link key={6} className="nav-link text-dark px-5" to="/expert">
      Nonsequiter -&gt; but if you&apos;re a past Curated connection of mine!
    </Link>,
      ]}
    />
    </>
  );
}

export default Nav;
