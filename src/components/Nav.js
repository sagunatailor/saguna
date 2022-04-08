import { HashLink as Link } from 'react-router-hash-link';

function Nav(){
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    return(
      <>
        <nav>
          <Link smooth to='#about'><i className='fa fa-fw fa-home'></i> About</Link >
          <Link smooth to='#skills'><i className='fa fa-paint-brush'></i> Skills</Link >
          <Link smooth to='#portfolio'><i className='fa fa-briefcase'></i> Portfolio</Link >
          <Link smooth to='#experience'><i className='fa fa-fw fa-superpowers'></i> Experience</Link >
          <Link smooth to='#contact'><i className='fa fa-fw fa-envelope'></i> Contact</Link >
        </nav>

        <div className='topnav'>
          <a href='#about' className='active'><i className='fa fa-paint-brush'></i></a>
          <div id='myLinks'>
            <Link smooth to='#about'><i className='fa fa-fw fa-home'></i> About</Link >
            <Link smooth to='#skills'><i className='fa fa-paint-brush'></i> Skills</Link >
            <Link smooth to='#portfolio'><i className='fa fa-briefcase'></i> Portfolio</Link >
            <Link smooth to='#experience'><i className='fa fa-fw fa-superpowers'></i> Experience</Link >
            <Link smooth to='#contact'><i className='fa fa-fw fa-envelope'></i> Contact</Link >
          </div>
          <a href className='icon' onClick={myFunction}>
            <i className='fa fa-bars'></i>
          </a>
        </div>
      </>
    );
}
export default Nav;