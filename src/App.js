import './style/index.css';
import Pages from './components/Ecommerce.js';
import Header from './components/Header';
import Gallery from './components/gallery';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  let title = 'Ecommerce';
  let link = 'Contact us';
  
  return (
    <>
    <Header title={title} link={link}/>
    <main>
      <Banner title={"Random word."} body={"On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely you. It possible no husbands jennings ye offended packages pleasant he. Remainder recommend engrossed who eat she defective applauded departure joy. Get dissimilar not introduced day her apartments. Fully as taste he mr do smile abode every. Luckily offered article led lasting country minutes nor old. Happen people things oh is oppose up parish effect. Law handsome old outweigh humoured far appetite."}/>
      <Gallery />
    </main>
    <Footer />
    </>
  );
}
export default App;