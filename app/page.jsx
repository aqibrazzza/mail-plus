import Hero from "@/components/Hero";
import Image from "next/image";
import feature1 from "@/assets/images/feature1.jpg";
import feature2 from "@/assets/images/feature1.jpg";
import feature3 from "@/assets/images/feature1.jpg";
import feature4 from "@/assets/images/feature1.jpg";
import howitworks from "@/assets/images/howitworks.webp";
import avatar from "@/assets/images/avatar.webp";
import qmarks from "@/assets/images/qmarks.webp";
import ctaImage from "@/assets/images/ctaImage.webp";
import playStoreBadge from "@/assets/images/playStoreBadge.png";
import appStoreBadge from "@/assets/images/appStoreBadge.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="px-custom space-y-16">
                <h2 className="mt-40 text-xl font-bold tracking-tight sm:text-3xl">
                    Start emailing like you chat, <br /> but with superpowers
                </h2>

                <div className="flex flex-col items-center gap-y-20 sm:flex-row sm:items-start sm:justify-between sm:gap-x-8">
                    <div className="mr-28 space-y-6 sm:mr-0">
                        <Image
                            src={feature1}
                            height={372}
                            width={290}
                            alt="Emails as threads, just like your chatting apps."
                        />
                        <p className="max-w-[200px]">Emails as threads, just like your chatting apps.</p>
                    </div>
                    <div className="ml-28 space-y-6 sm:ml-0 sm:mt-10">
                        <Image
                            src={feature2}
                            height={372}
                            width={290}
                            alt="Uncluttered threads, so
                            you can focus on the things that matter."
                        />
                        <p className="max-w-[200px]">
                            Uncluttered threads, so you can focus on the things that matter.
                        </p>
                    </div>
                    <div className="mr-28 space-y-6 sm:-mt-8 sm:mr-0">
                        <Image
                            src={feature3}
                            height={372}
                            width={290}
                            alt="Easy text formatting to write like a pro."
                        />
                        <p className="max-w-[200px]">Easy text formatting to write like a pro.</p>
                    </div>
                    <div className="ml-28 space-y-6  sm:ml-0 sm:mt-4">
                        <Image src={feature4} height={372} width={290} alt="Add attachments like you are used to." />
                        <p className="max-w-[200px]">Add attachments like you are used to.</p>
                    </div>
                </div>
            </section>
            {/* SEE HOW IT WORKS */}
            <section className="px-custom">
                <div className="mt-40 space-y-8 sm:space-y-12">
                    <h2 className="text-xl font-bold tracking-tight sm:text-3xl">See how it works</h2>
                    <Image className="cursor-pointer" src={howitworks} alt="How It Works Video" />
                </div>
            </section>
            {/* TESTIMONIAL */}
            <section className="px-custom my-28 bg-brand pb-24 pt-32 text-white md:my-36 ">
                <div className="sm:flex sm:items-center sm:space-x-10">
                    <Image src={avatar} className="h-20 w-20 sm:h-40 sm:w-40" alt="client picture" />
                    <div className="mt-4 space-y-2 sm:mt-0">
                        <p className="tracking-wide sm:text-2xl">
                            Emails used to intimidate me, but <br /> this email app feels like home.
                        </p>
                        <p className="text-xs tracking-widest opacity-60 sm:text-sm">Founder, SocialMonkey</p>
                    </div>
                </div>
                <div className="sm:-mt-12">
                    <Image
                        src={qmarks}
                        className="ml-auto w-40 opacity-10 sm:w-48 md:w-72 lg:mr-20"
                        alt="quotation marks"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="space-y-12">
                <div className="mx-auto w-fit">
                    <Image src={ctaImage} className="w-60 sm:w-[420px]" alt="Image showcasing app" />
                </div>
                <div className="mx-auto w-fit space-y-8">
                    <h2 className="text-center text-3xl font-bold tracking-tight">
                        Get Mail+ <span className="text-brand">for free</span>
                    </h2>
                    <div className="space-y-3">
                        <div className="flex justify-center space-x-2 md:justify-center">
                            <Image src={playStoreBadge} alt="Get in on Google Play Store Badge" />
                            <Image src={appStoreBadge} alt="Get in on Apple's App Store Badge" />
                        </div>
                        <div className="items-center space-y-1 text-center text-sm font-medium text-black/60 sm:space-x-3 md:flex">
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
                            <p>Trusted by 1.2M people with 4.8 ratings</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <footer className="px-custom mt-28 justify-between space-y-8 bg-[#F0F0F0] pb-8 pt-16 sm:flex sm:space-y-0 md:mt-40">
                <h3 className="-mt-2 select-none text-2xl font-extrabold tracking-tight hover:cursor-pointer">
                    Mail<span className="text-brand">+</span>
                </h3>
                <div className="max-w-sm space-y-4 text-sm">
                    <p className="opacity-60">Copyright © 2023 Invox. All Rights Reserved.</p>
                    <p className="leading-relaxed opacity-60">
                        The content and materials on this website, including but not limited to text, graphics, images,
                        videos, and software, are the property of invox and are protected by intellectual property laws.
                        Unauthorized use or distribution of any of these materials is strictly prohibited. We respect
                        your privacy and are committed to protecting any personal information you provide us through
                        this website. Please refer to our Privacy Policy for more information.
                    </p>
                </div>
            </footer>
        </>
    );
}
