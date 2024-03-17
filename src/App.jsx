import './App.css'
import Recipes_box from './components/Recipes_box/Recipes_box';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes_box></Recipes_box>
    </>
  )
}

export default App
