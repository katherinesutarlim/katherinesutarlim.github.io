import { faFileAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import embellishment from './assets/embellishment.svg';
import './App.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from './components/Link';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("home");
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="top-container">
            <div className="content">
              <div className="greeting">
                <span className="hello">Hello I'm </span>
                <span className="name">Katherine!</span>
              </div>
              {page === "contact" ? (
                <div>
                  <p className="bold">Nice to meet you!</p>
                  <p className="summary">Got a question to ask or a something to share? Send me an email at <a href='mailto:katherinesutarlim@ymail.com'>katherinesutarlim@ymail.com</a> and I will get back to you ASAP. Looking forward to our chat!</p>
                </div>
              ) : (
                <div>
                  <p className="bold">I love <span className='highlight'>coding</span> and <span className='highlight'>creating</span>.</p>
                  <p className="summary">I’m a full-stack developer specialising in Mobile App Development with <span className='highlight'>React Native</span> and <span className='highlight'>AWS</span>. I love tinkering with tech and crafts alike. Hit me up if you want to chat!</p>
                </div>
              )}
            </div>
            <img src={embellishment} className="embellishment large-screen" alt="Laptop, git branches, and code" />
          </div>
          <div className="bottom-container">
            <ul>
              {[
                {
                  icon: faFileAlt,
                  text: "Resume",
                  url: "https://drive.google.com/file/d/12l6vkJgF3RQd5rSJMTK1yiFVD7bagkk7/view?usp=sharing"
                },
                {
                  icon: faGithub,
                  text: "Projects",
                  url: "https://github.com/katherinesutarlim/"
                },
                {
                  icon: faLinkedin,
                  text: "LinkedIn",
                  url: "https://linkedin.com/in/katherine-sutarlim/"
                },
                {
                  icon: faEnvelope,
                  text: "Contact me",
                  page: "contact",
                  onClick: (event) => {
                    event.preventDefault();
                    setPage("contact");
                  }
                },
                {
                  icon: faHome,
                  text: "Home",
                  page: "home",
                  onClick: (event) => {
                    event.preventDefault();
                    setPage("home");
                  }
                }
              ].filter(link => page !== link.page).map(({icon, text, url, target, onClick}) => (
                <li key={text}><Link icon={icon} text={text} url={url} target={target} onClick={onClick}/></li>
              ))}
            </ul>
            <img src={embellishment} className="embellishment medium-screen" alt="Laptop, git branches, and code" />
          </div>
        </div>
      </main>
      <footer>
        Copyright &copy; {year}, Katherine Sutarlim
      </footer>
    </div>
  );
}

export default App;
