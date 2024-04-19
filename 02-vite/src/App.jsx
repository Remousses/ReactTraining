import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Vite et React</h1>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/exo/ajax">Ajax</NavLink>
        <NavLink to="/exo/state">State</NavLink>
        <NavLink to="/exo/lifecycle">Lifecycle</NavLink>
        <NavLink to="/bonjour/toto">Bonjour Toto</NavLink>
        <NavLink to="/bonjour/remy">Bonjour Remy</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/sansRedux">Sans Redux</NavLink>
        <NavLink to="/avecRedux">Avec Redux</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;