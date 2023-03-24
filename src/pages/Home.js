import coco from '../coco.jpeg';
import coco1 from '../coco1.jpeg';
import '../App';

import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div className="bg-[#872a87]">
      <nav className="flex justify-around sticky top-0 bg-[#872a87] p-2 drop-shadow shadow-[#872a87]">
      <div>
      <h1 className="text-[#E4E4F2] text-4xl font-black text-center">BCO</h1>
          <p className="text-[#E4E4F2] text-xl font-bold text-center">Bmac-Coco-Oils</p>
      </div>
      <Link className='flex justify-center items-center' to="/promo"><div className='shadow font-bold text-[#872a87] bg-[#E4E4F2] hover:bg-[#872a87] hover:text-[#E4E4F2] hover:shadow-[#E4E4F2] p-2 rounded-xl'>Admin</div></Link>
      </nav>
      <Link className='flex justify-center items-center m-3' to="/add"><div className='shadow font-bold text-[#872a87] bg-[#E4E4F2] hover:bg-[#872a87] hover:text-[#E4E4F2] hover:shadow-[#E4E4F2] p-2 rounded-xl'>Place your Order</div></Link>
      <section className="flex justify-evenly">
      <img className="h-[450px]  rounded-3xl" src={coco} alt="Party" />
      <img className="h-[450px] rounded-3xl" src={coco1} alt="Party" />
      </section>
      
  
      <div className="pb-10 m-5">
        
        
        </div>
  
      <footer className="fixed left-0 bottom-0 p-2 w-full flex justify-center items-center bg-[#E4E4F2] drop-shadow shadow-[#872a87] text-[#872a87] ">
          <h1 className="mr-3 text-md font-serif font-semibold text-center">
            C0D3L1F3 
            </h1>
            <a href='https://instagram.com/b.mac_pure.coconut.oils?igshid=YmMyMTA2M2Y='>INSTA</a>
      </footer>
  </div>
    );
  
}

export default Home;
