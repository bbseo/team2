import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const Home = styled.div`
  width: 1440px;
  margin: auto;
`


function App() {
  return (
    // <Home>
    <div>
      <Header />
      <Content />
    </div>
    // {/* </Home>     */}
  );
}

export default App;
