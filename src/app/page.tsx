import OurMenu from "./ourMenu/page";
export default function Home() {  
  return (  
    <div className="relative min-h-screen bg-gray-100 custom-bg text-white ">  
      {/* Cover overlay */}  
     

      <div className="flex flex-col items-center justify-center h-screen relative z-10">  
       
        <img  
          src="/images/main/mainlog.png"  
          alt="Restaurant Logo"  
          className="h-[144px] w-[503px] mb-4"  
        />  

        <h2 className="text-4xl font-bold mb-4 text-center">Tender Meat, Fragrant Rice, And A</h2>  
        <h2 className="text-4xl font-bold mb-4 text-center">Symphony Of Spices</h2>  
        <h3 className="text-lg text-center mb-4">EXPERIENCE THE TRUE ESSENCE OF MANDI</h3>  
        <div className="absolute inset-0 bg-black opacity-50"></div> 
      </div>  
      <OurMenu />
    </div>  
  );  
}