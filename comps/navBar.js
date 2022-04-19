import React from "react";
import Link from "next/link";
import Image from "next/Image";
function NavBar() {
  return (
    <nav>
      <div className='logo'>
        <Image src='/Logo.png' alt='' width={128} height={77} />
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
