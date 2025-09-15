import icon1 from './assets/close.png'
import icon2 from './assets/gallery.png'
import icon3 from './assets/right-arrow.png'
import ActiveButton from './ActiveButton'
import Boxes from './Boxes'

function LandingPage() {
  return (
    <div >
        <div className=''>
            <button>
                <img src={icon1} alt="cancel"
                className='h-8 w-8 mt-7 ml-4 mb-5' />
            </button>
            <ActiveButton />
        </div>
        <div className='pt-5'>
            <Boxes />
        </div>

         <div className="relative bg-[#111] text-white p-4 rounded-xl text-sm leading-relaxed mt-4">
      <p className='pb-8'>
        Stunning promotional image of a deliciously decorated cake, emphasizing
        its layers, frosting, and toppings in an enticing setting.
      </p>

     
      <img
        src={icon2}
        alt="gallery"
        className="absolute bottom-3 right-3 w-5 h-5 opacity-80 cursor-pointer "
      />
    </div>

     <div >
      <h3 className="px-4 pt-4 text-gray-300 text-sm">Settings</h3>

     <div className='bg-[#111] rounded-lg'>
        
      <div className="mt-2 divide-y divide-gray-700">
        <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-white text-sm">Size</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">1080 × 1920 px</span>
            <img src={icon3} alt=">" className="w-3 h-3 opacity-70" />
          </div>
        </div>

        
        <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-white text-sm">Category</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Foods and beverage</span>
            <img src={icon3} alt=">" className="w-3 h-3 opacity-70" />
          </div>
        </div>
      </div>
     </div>

      
      <div className="px-4 py-5">
        <button className="w-full bg-white text-black font-medium py-3 rounded-lg flex justify-center items-center hover:bg-gray-200 transition">
          <span className="text-base">Generate</span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default LandingPage