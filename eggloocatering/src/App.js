import './App.css';
import Contact from './components/contact';
import CarouselEggloo from './components/carousel';
import favicon from './assets/favicon.png';
import waffle from './assets/waffle.png';

function App() {
  return (
    <div>
      <img src={favicon} alt='eggloo cone' className='mx-auto mt-4 h-auto w-60 mb-0 pb-0' />
      {/* <Image width={100} src={waffle} className='' />
      <Image width={100} src={waffle} className='' />
      <Image width={100} src={waffle} className='' />
      <Image width={100} src={waffle} className='' /> */}
      <Contact />
      {/* <CarouselEggloo /> */}
    </div>
  );
}

export default App;
