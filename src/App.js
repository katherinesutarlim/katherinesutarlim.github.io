import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/logo.svg';
import embellishment from './assets/embellishment.svg';
import './App.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="Katherine Sutarlim, logo" />
      </header>
      <main>
        <div className="container">
          <div className="content">
            <div className="greeting">
              <span className="hello">Hello I'm </span>
              <span className="name">Katherine!</span>
            </div>
            <p className="bold">I love creating and coding.</p>
            <p className="summary">I develop web and mobile applications with JavaScript (React, React Native, Node.js, Vue.js), and I enjoy facing new challenges, learning new technologies, languages, and frameworks.</p>
            <p className="summary">Have a creative project you want to make real? Feel free to get in touch via <a href="https://linkedin.com/in/katherine-sutarlim/">LinkedIn</a> or email at <a href="mailto:katherinesutarlim@ymail.com">katherinesutarlim@ymail.com</a></p>
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
                }
              ].map(({icon, text, url}) => (
                <li key={text}><Link icon={icon} text={text} url={url} /></li>
              ))}
            </ul>
          </div>
          <img src={embellishment} className="embellishment" alt="Laptop, git branches, and code" />
        </div>
      </main>
    </div>
  );
}

export default App;
