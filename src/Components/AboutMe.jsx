
import Skills2 from "../assets/graphic2";

const AboutMe = () => {
  return (
    <div className="bg-black overflow-x-clip  ">
          <div className=" lg:px-40 flex flex-col   h-[150vh] md:h-[130vh]  lg:flex-row  space-x-5 overflow-x-hidden ">
            {/* Column One */}
            <div className="mt-64 lg:mt-96 lg:mb-64 px-10 lg:px-0 lg:w-5/12">
              <h1 className="font-bold text-6xl mb-10">About Me</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
                tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
                nulla risus magna nisi massa. Egestas mattis ullamcorper integer
                nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
                tempus. Erat in tellus nisl quis ultrices aliquet.
                <br />
                <br />
                Egestas mattis ullamcorper integer nibh ridiculus auctor.
                Nascetur velit diam odio ante tempor amet tempus. Erat in tellus
                nisl quis ultrices aliquet.
              </p>
            </div>

            {/* Column Two */}
            <div className="relative mt-24  lg:mt-96 lg:mb-64  py-10 w-full lg:w-7/12 ">
              <Skills2 className="absolute scale-[.6] sm:scale-[.9] -right-14  sm:right-28 md:right-44 lg:-right-20 xl:right-6  lg:scale-[.8] xl:scale-[.9]" />
            </div>

            <div></div>
          </div>
        </div>
  )
}

export default AboutMe