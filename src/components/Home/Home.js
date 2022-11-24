import Icons from '../../Pages/Icons'
import Menu from './Menu'
import Review from './Review'
import Services from './Services'
import Chefs from '../About/Chefs';
import Reservation from './Reservation';


export default function Home() { // console.log(data);


    return (
        <>
            <div className='h-screen bg-cover bg-center bg-no-repeat bg-hero-home flex justify-center items-center bg-fixed scroll-smooth'>

                <div className='flex text-white h-full w-full bg-opacity-30 bg-black relative'>
                    <div className='lg:w-1/2 m-auto items-center'>
                        <p className='uppercase text-center font-nunito leading-10 tracking-[0.2em] font-black text-[12px]'>Enjoy your healthy delicious food</p>

                        <h1 className='text-center text-5xl sm:text-7xl font-playfair font-semibold' data-aos="fade-up" data-aos-duration="2000">Treat Yourself</h1>

                        <p className='text-center p-7 font-marck leading-6 text-xl' data-aos="fade-up" data-aos-duration="2500">A Genuine Fine Dining Experience Awaits You!</p>

                        <div className='text-center ' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="false">
                            <button onClick={()=>window.scrollBy(0, window.innerHeight)} className='btn rounded-3xl px-6 bg-orange-500 btn-md border border-none text-white text-xs'>Explore More
                            </button>
                        </div>

                        <Icons></Icons>

                    </div>
                </div>
            </div>

            <Services></Services>
            <Menu></Menu>
            <Chefs></Chefs>
            <Reservation></Reservation>
            <Review></Review>

        </>


    )
}
