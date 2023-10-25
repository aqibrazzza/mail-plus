import Image from "next/image";
import heroImage from "@/assets/images/heroImage.png";
import playStoreBadge from "@/assets/images/playStoreBadge.png";
import appStoreBadge from "@/assets/images/appStoreBadge.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Hero() {
    return (
        <header className="px-custom relative w-screen">
            <h3 className="mt-8 select-none text-2xl font-extrabold tracking-tight hover:cursor-pointer">
                Mail<span className="text-brand">+</span>
            </h3>
            <div className="mt-20 md:mt-40">
                <div className="grid grid-cols-5 gap-16 md:grid-cols-8 md:gap-2">
                    <div className="col-span-5 mt-20 space-y-6 md:space-y-10">
                        <h1 className="text-center text-4xl font-bold tracking-tighter text-neutral-800 sm:text-5xl md:text-left lg:text-7xl">
                            Redefine your <br />
                            <span className="text-brand">email experience</span>
                        </h1>
                        <p className="mx-auto max-w-xs text-center text-lg tracking-normal text-neutral-800 md:mx-0 md:max-w-full md:text-left lg:text-2xl">
                            Send, receive and manage emails with ease. <br className="hidden sm:flex" /> Get the app for
                            free on Google play and App store.
                        </p>
                        <div className="space-y-6 sm:space-y-4">
                            <div className="flex justify-center space-x-2 md:justify-start">
                                <Image src={playStoreBadge} alt="Get in on Google Play Store Badge" />
                                <Image src={appStoreBadge} alt="Get in on Apple's App Store Badge" />
                            </div>
                            <div className="items-center space-y-2 text-center text-sm font-medium sm:space-x-3 md:flex">
                                <div
                                    className="flex justify-center gap-1 text-amber-400"
                                    role="img"
                                    aria-label="Rating: 4 out of 5 stars"
                                >
                                    <BsStarFill className="text-lg" />
                                    <BsStarFill className="text-lg" />
                                    <BsStarFill className="text-lg" />
                                    <BsStarFill className="text-lg" />
                                    <BsStarHalf className="text-lg" />
                                </div>
                                <p className="text-neutral-400">Trusted by 1.2M people with 4.8 ratings</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 flex justify-center md:col-span-3 md:justify-end">
                        <Image className="w-96 md:w-[460px]" src={heroImage} priority alt="Hero Image" />
                    </div>
                </div>
            </div>
            <div className="absolute -mt-40 h-40 w-full bg-gradient-to-t from-white to-white/0"></div>
        </header>
    );
}
export default Hero;
