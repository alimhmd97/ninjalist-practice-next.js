import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <nav>
      <div className='logo'>
        <h1>ninja list</h1>
      </div>
      <Link href='/'>
        <a>home</a>
      </Link>

      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>ninja list</a>
      </Link>
    </nav>
  );
}

export { NavBar };
