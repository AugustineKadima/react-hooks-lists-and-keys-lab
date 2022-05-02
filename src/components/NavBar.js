import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={links.home} href={"#"+links.home}>Home</a>
    <a key={links.about} href={"#"+links.about}>About</a>
    <a key={links.projects} href={"#"+links.projects}>Projects</a>
  </nav>;
}

export default NavBar;
