import blogsbg from "../assets/blogsbg.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";


const Blogs = () => {
  return (
    <div className="text-white bg-black">
        <div
        className="h-[110vh] bg-fit bg-no-repeat bg-center  flex justify-center items-center"
        style={{ backgroundImage: `url(${blogsbg})` }} // Background Image as Cover
      >
        <div className="flex flex-col justify-center items-center   ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-9/12 text-center  ">
          Good reading expands minds, fuels imagination, and nourishes souls.
          </h1>
        </div>
      </div>

    {/* Blog Types */}

    <div  className="h-24 -mt-10 flex items-center" >
  <div className="flex flex-row w-10/12 m-auto  items-center text-base md:text-lg lg:text-2xl  " 
  style={{
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -59.09%, #1F1F20 135.23%)",
  }}>
    <div 
      className="h-14 w-64 pt-3 felx items-center justify-center text-center hover:bg-custom-gradient2"
    >All Categories</div>
    <div 
      className="h-14 w-60 pt-3 felx items-center justify-center text-center hover:bg-custom-gradient2"
    >Community</div>
    <div 
      className="h-14 w-64 pt-3 felx items-center justify-center text-center hover:bg-custom-gradient2"
   >Tech</div>
    <div 
      className="h-14 w-64 pt-3 felx items-center justify-center text-center hover:bg-custom-gradient2"
    >Marketing</div>
    <div 
      className="h-14 w-64 pt-3 felx items-center justify-center text-center hover:bg-custom-gradient2"
    >Brand</div>
   
   
   

  </div>
</div>

    {/* Blogs */}

    <div className="px-28 mt-40">

    <div className="flex flex-wrap justify-between mt-10 gap-y-10">

                  {/* blog1 */}

              <div className="text-lg">
                <img src={blog1} alt="blog1" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                  {/* blog2 */}

              <div className="text-lg">
                <img src={blog2} alt="blog2" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                {/* blog3 */}

              <div className="text-lg">
                <img src={blog3} alt="blog3" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mt-10 gap-y-10 pb-20">

                  {/* blog1 */}

              <div className="text-lg">
                <img src={blog1} alt="blog1" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                  {/* blog2 */}

              <div className="text-lg">
                <img src={blog2} alt="blog2" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                {/* blog3 */}

              <div className="text-lg">
                <img src={blog3} alt="blog3" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>
            </div>
            </div>

    </div>
  )
}

export default Blogs