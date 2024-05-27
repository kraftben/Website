import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';

const sections = [
  {
    id: 'about',
    title: 'About Me',
    image: 'DronePhotos\Hoan Bridge.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis quam at libero tristique, a venenatis eros lacinia. Donec ut nisl quis lacus cursus bibendum. Phasellus tincidunt orci vitae quam pretium, at mollis metus eleifend.'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    image: 'path-to-another-photo.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis quam at libero tristique, a venenatis eros lacinia. Donec ut nisl quis lacus cursus bibendum. Phasellus tincidunt orci vitae quam pretium, at mollis metus eleifend.'
  },
  {
    id: 'contact',
    title: 'Contact',
    image: 'path-to-another-photo.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis quam at libero tristique, a venenatis eros lacinia. Donec ut nisl quis lacus cursus bibendum. Phasellus tincidunt orci vitae quam pretium, at mollis metus eleifend.'
  }
];

function Section({ id, title, image, content }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        set({ opacity: 1, transform: 'translateY(0px)' });
      } else {
        set({ opacity: 0, transform: 'translateY(50px)' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, set]);

  return (
    <animated.section id={id} className="container" style={props}>
      <h2>{title}</h2>
      <img src={image} alt={`${title} Photo`} className="content-photo" />
      <p>{content}</p>
    </animated.section>
  );
}

function App() {
  return (
    <>
      <header>
        <div className="container">
          <img src="Kraft_Headshot3.jpg" alt="Your Photo" className="profile-photo" />
          <h1>Your Name</h1>
          <p className="subtitle">Your Subtitle or Tagline</p>
        </div>
      </header>

      <nav>
        <div className="container">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {sections.map(section => (
          <Section key={section.id} {...section} />
        ))}
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
