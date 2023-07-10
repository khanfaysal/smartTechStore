import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center h-[calc(100vh-80px)] max-w-7xl mx-auto">
        <div className="text-center md:text-left md:order-2">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2">
            HAYLOU <br /> SOLAR PLUS
          </h1>
          <p className="text-secondary font-semibold text-lg md:text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-10 md:mt-20">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative md:order-1 -mt-10 md:mt-0">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-16 md:mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Browse all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
