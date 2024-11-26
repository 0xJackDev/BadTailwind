import Image from "next/image";

export default function Page() {
  return (
  <div className="grid grid-cols-5 grid-rows-5 gap-4  h-screen v-screen overflow-hidden ">
          <div className="col-start-1 row-start-2 w-[60vw] h-[100vh] bg-white rounded-lg shadow-lg z-0 border-black border-2 rounded-3xl" ></div>
          <div className="col-start-2 row-start-2 z-10 -mt-20 ">
              <img src={'/images/logo-32x-32.png'} width={125} height={124}/>
          </div>
          <div className="col-start-1 row-start-2 z-10 text-6xl text-wrap pt-20 pl-20 text-nowrap text-left text-blue-800	">QR code Component</div>
          <p className="col-start-1 row-start-3 z-10 text-left text-wrap text-xl pl-20 "> This is a Figma design file for a Frontend Mentor challenge. Figma is a  design tool professional teams use to collaborate on projects. Need help  using Figma? Read our Figma for developers article</p>
          <div className="col-start-1 row-start-4 z-10 w-[70vh] pl-20 relative" >
            <Image className="object-fill rounded-lg w-[100vh] h-[50vh] border-t-[10px] border-l-[10px] border-r-[10px] border-black rounded-lg" src={"/images/desktop-design.jpg"} width={956} height={561} alt="image"/>
    
          </div>
          <div className="col-start-4 row-start-3 space-y-4">
          <h1 className="text-xl font-bold">Design Systems</h1>
          <div className="flex items-start space-x-4">
            <img src="/images/emoji_1.png" className="w-12 h-12" alt="emoji" />
            <p>
            The design system contains all the information for reusable components and styles. It shows colors, typography styles, and components, including various component states if they&apos;re interactive.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="col-start-4 row-start-4 space-y-4">
          <h1 className="text-xl font-bold">Design</h1>
          <div className="flex items-start space-x-4">
            <img src="/images/emoji_2.png" className="w-12 h-12" alt="emoji" />
            <p>
            The high-fidelity designs help you build responsive, accessible projects. Aim for precision rather than pixel-perfect replicas. For guidance, see Josh Comeau&apos;s &quot;Chasing the Pixel-Perfect Dream.&quot;
            </p>
          </div>
        </div>
  </div>
  );
}
