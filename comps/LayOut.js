import { Footer } from "./footer";
import { NavBar } from "./navBar";

function LayOut({ children }) {
  return (
    <nav>
      <NavBar />
      {children}
      <Footer />
    </nav>
  );
}

export { LayOut };
