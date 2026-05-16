import { bannerData } from "../assets/data"


export function StackBanner () {

    return(
        <div className="bg-[#F3F2F5]/50 p-2">
            <div className="flex gap-10 items-center">

            {bannerData.map(images => 
                <img src={images.src} alt={images.alt} className="w-8 h-8 px-2 box-content opacity-80"/>
            )}

        </div>        
        </div>
        
    )
}