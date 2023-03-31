const links = [
  { title: 'Home', path: '/home', icon: <HomeIcon /> },
  { title: 'About', path: '/about', icon: <AboutIcon /> },
  { title: 'Contact', path: '/contact', icon: <ContactIcon /> }
];

function Navbar() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>
              {link.icon}
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}