import './header.css';

function header() {
    return (
      <header className='navBar'>
        <ul>
            <li className='listItem'><a>Home</a></li>
            <li className='listItem'>Contacts</li>
        </ul>
      </header>
    );
  }

  export default header;