import Hero from "./Components/Hero-Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Productivity from "./Components/Productivity/Productivity";

export default function Home() {
  return (
    <div>
       <div className="relative">
          <div className="absolute">
              <Navbar/>
          </div>
       </div>
       <div className="overflow-hidden">
        <div className="relative">
          <img className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image" width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt=""  />
        </div>
        <div className="Hero-section px-3">
            <Hero/>
        </div>
        <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
       </div>
    </div>
  );
}
