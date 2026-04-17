import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <img id="sc-logo" src="/assets/icons/personal-logo.png" alt="Seth Caparelli logo" />
        <h1 id="logo-header">Seth Caparelli</h1>
        <h5 id="logo-subheader">
          Software Engineer &nbsp; | &nbsp; Artist &nbsp; | &nbsp; Designer
        </h5>
      </div>
      <Nav />
    </header>
  );
}
