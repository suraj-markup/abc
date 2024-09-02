import projectsbg from "../assets/projectsbg.png";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import Circle from "../assets/Circle";
import start1 from "../assets/start1.png";
import start2 from "../assets/start2.png";
import start3 from "../assets/start3.png";
import start4 from "../assets/start4.png";
import start5 from "../assets/start5.png";
import start6 from "../assets/start6.png";
import Skills1 from "../assets/graphic1";

const Projects = () => {
  return (
    <div className="text-white bg-black overflow-x-clip">

    {/* Landing Part */}

      <div
        className="h-[90vh] md:h-[120vh] bg-cover bg-no-repeat bg-center pt-1 "
        style={{ backgroundImage: `url(${projectsbg})` }} // Background Image as Cover
      >
        <div className="flex flex-col justify-center items-center mt-40 lg:mt-48  ">
          <p className="text-[40px] font-normal">Brand Logo</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-9/12 text-center  ">
            World Music Day Campaign
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl w-7/12  my-10 text-center font-light">
            “ Lorem ipsum dolor sit amet consectetur. Risus bibendum elementum
            platea facilisis. Dignissim eu ut sem integer ”
          </p>
          <div className="grid grid-flow-row lg:grid-flow-col gap-2 px-20 mt-16">
            <img src={p1} alt="project1"  className="flex items-center justify-center"/>
            <img src={p2} alt="project2" className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* How it started */}

      <div className="py-36 sm:py-44 lg:py-52 px-10 lg:px-40">
        <div className=" ">
          <h1 className="relative text-3xl md:text-6xl font-bold m-auto mb-16">
            <span className="relative inline-block">
              How it started?
              <span className="relative">
                <Circle className="absolute size-32  md:size-max -top-8 right-0  transform translate-x-10" />
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row  gap-10">
          <div className="w-full lg:w-8/12 flex justify-center items-center text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus. Erat in tellus nisl quis ultrices aliquet.
              <br />
              <br />
              Egestas mattis ullamcorper integer nibh ridiculus auctor. Nascetur
              velit diam odio ante tempor amet tempus. Erat in tellus nisl quis
              ultrices aliquet.Lorem ipsum dolor sit amet consectetur. Nec enim
              feugiat id tristique velit vitae a odio mi. Aenean aliquet non
              dictumst sit nulla risus magna nisi massa. Egestas mattis
              ullamcorper integer nibh ridiculus auctor. Nascetur velit diam
              odio ante tempor amet tempus. Erat in tellus nisl quis ultrices
              aliquet.
              <br />
              <br />
              Egestas mattis ullamcorper integer nibh ridiculus auctor. Nascetur
              velit diam odio ante tempor amet tempus. Erat in tellus nisl quis
              ultrices aliquet.
            </p>
          </div>

          <div className="w-full lg:w-5/12 ">
            <div className="bg-black p-4 flex justify-center items-start ">
              <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
                <div className="col-span-1 space-y-4">
                  <div className="bg-pink-100 rounded-2xl overflow-hidden aspect-square">
                    {/* Content for first square */}
                    <img
                      src={start1}
                      alt="Colorful portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-blue-100 rounded-2xl overflow-hidden aspect-square">
                    {/* Content for second square */}
                    <img
                      src={start2}
                      alt="Portrait with blue tint"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="row-span-2">
                  <div className="bg-pink-500 rounded-2xl overflow-hidden aspect- h-[95%]">
                    {/* Content for rectangle */}
                    <img
                      src={start3}
                      alt="Person with headphones"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills 2 */}
      <div className="flex relative h-[30vh] md:h-[60vh] items-center justify-center  pb-32">
        <Skills1 className=" absolute scale-[.4] lg:left-[7%] xl:left-[15%] sm:scale-[.6] md:scale-[.8] lg:scale-[.9] lg:h-full lg:w-full  "/>
      </div>

      {/* Brand Collaboration */}

      <div className="pt-40 px-10 lg:px-40">
        <div className=" ">
          <h1 className="relative text-3xl md:text-6xl font-bold m-auto mb-20">
            <span className="relative inline-block">
              Brand Collaboration
              <span className="relative">
                <Circle className="absolute size-32  md:size-max -top-8 right-0  transform translate-x-10" />
              </span>
            </span>
          </h1>
        </div>
        <div className="text-sm lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
            tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
            nulla risus magna nisi massa. Egestas mattis ullamcorper integer
            nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
            tempus. Erat in tellus nisl quis ultrices aliquet.
            <br />
            <br />
            Egestas mattis ullamcorper integer nibh ridiculus auctor. Nascetur
            velit diam odio ante tempor amet tempus. Erat in tellus nisl quis
            ultrices aliquet.Lorem ipsum dolor sit amet consectetur. Nec enim
            feugiat id tristique velit vitae a odio mi. Aenean aliquet non
            dictumst sit nulla risus magna nisi massa. Egestas mattis
            ullamcorper integer nibh ridiculus auctor. Nascetur velit diam odio
            ante tempor amet tempus. Erat in tellus nisl quis ultrices aliquet.
            <br />
            <br />
            Egestas mattis ullamcorper integer nibh ridiculus auctor. Nascetur
            velit diam odio ante tempor amet tempus. Erat in tellus nisl quis
            ultrices aliquet.
            <br />
            <br />
          </p>
        </div>

        <div>
          <div className=" bg-black flex justify-center items-center">
            <div className="grid grid-cols-5 gap-5 p-4 justify-start">
              {" "}
              {/* Adjusted grid width */}
              {/* First column */}
              <div className="grid grid-rows-2 lg:w-4/5 gap-2 ">
                <img src={start1} className="rounded-md" />
                <img src={start2} className="rounded-md  " />
              </div>
              {/* Second column */}
              <div className="col-span-1 -ml-2 lg:-ml-8 xl:-ml-12 w-[110%]">
                <img src={start3} className="rounded-md size-full" />
              </div>
              {/* Third column */}
              <div className="col-span-2 -ml-3 sm:-ml-1 lg:-ml-8 grid grid-rows-2 w-4/5 gap-4">
                <div className="row-span-1 ">
                  <img src={start4} className="rounded-md h-full " />
                </div>
                <div className="row-span-1">
                  <img src={start5} className="rounded-md  h-full" />
                </div>
              </div>
              {/* Fourth column */}
              <div className="rounded-md -ml-12 sm:-ml-16 lg:-ml-24 xl:-ml-32 w-[155%]">
                <img src={start6} className="rounded-xl size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Output */}

      <div className="py-24 px-10 lg:px-40">
        <div className=" ">
          <h1 className="relative text-3xl md:text-6xl font-bold m-auto mb-14">
            <span className="relative inline-block">
              Final Output
              <span className="relative">
                <Circle className="absolute size-32  md:size-max -top-8 right-0  transform translate-x-5 lg:translate-x-20" />
              </span>
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center ">
          <div className="bg-black m-auto w-[120%]">
            <div className="grid grid-cols-5 gap-5 p-4 justify-start w-full">
              {/* First column */}
              <div className="grid grid-rows-2 w-[120%] gap-2 ">
                <img src={start1} className="rounded-md size-full" alt="Start 1" />
                <img src={start2} className="rounded-md size-full" alt="Start 2" />
              </div>

              {/* Second column */}
              <div className="col-span-1 -ml-1 sm:ml-3 lg:ml-4 xl:ml-9 w-[150%]">
                <img
                  src={start3}
                  className="rounded-md size-full"
                  alt="Start 3"
                />
              </div>

              {/* Third column */}
              <div className="col-span-2 ml-2 sm:ml-14 lg:ml-16 xl:ml-32 grid grid-rows-2 w-[120%] gap-4">
                <div className="row-span-1">
                  <img
                    src={start4}
                    className="rounded-md h-full"
                    alt="Start 4"
                  />
                </div>
                <div className="row-span-1">
                  <img
                    src={start5}
                    className="rounded-md h-full"
                    alt="Start 5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
