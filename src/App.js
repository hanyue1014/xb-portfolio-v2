import './App.css';

import Nav from './components/Nav'
import Section from './components/Sections';
import Land from './components/Sections/Land';

function App() {
  return (
    <div className="App">
      <Nav />
      <Section id='Home'>
        <Land />
      </Section>
      <Section id='Projects'>
        <Land />
      </Section>
      <Section id='About'>
        <Land />
      </Section>
      <Section id='Contact'>
        <Land />
      </Section>
    </div>
  );
}

export default App;
