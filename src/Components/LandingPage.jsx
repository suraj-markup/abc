import { Avatar, Arrow, Arrow2 } from "../assets/Avatar";
import bg from '../assets/bg.mp4'

const LandingPage = () => {
  return (
    <div className="relative h-[140vh] md:h-[120vh] lg:h-[140vh] xl:h-[120vh] bg-cover bg-no-repeat bg-center pt-1">
      {/* YouTube Video Background */}
     
      <video autoPlay loop muted className="bg-vid absolute  inset-0 h-[100vh] md:h-[140vh] w-full bg-cover overflow-scroll object-cover"> <source src={bg} type="video/mp4"  /> 
     </video>


      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center mt-40 lg:mt-48 ">
        <Avatar className="" />
        <p className="text-2xl font-bold text-white">Hello, I&apos;m Attul 🤟🏽</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-9/12 lg:w-6/12 text-center pt-5 my-14 text-white">
          I help brands with digital marketing, brand building, and marketing
          operations.
        </h1>
        <p className="text-sm md:text-base lg:text-lg w-8/12 lg:w-6/12 text-center font-light text-white">
          As a partner at ID8NXT and Director of Digital at NeoNiche, I have
          over a decade of experience in the dynamic world of digital marketing,
          VR, and marketing operations.
        </p>

        <button className="border-2 flex flex-row items-center justify-center gap-2 border-white rounded-3xl px-4 py-2 w-40 hover:bg-white relative group mt-14 lg:mt-20">
          <p className="text-gradient-hover">Let&apos;s Connect</p>
          <div className="relative">
            <Arrow className="transition-all duration-200 ease-in-out block group-hover:hidden" />
            <Arrow2 className="transition-all duration-200 ease-in-out hidden group-hover:block" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
