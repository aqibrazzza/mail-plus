import Hero from "@/components/Hero";
import Image from "next/image";
import feature1 from "@/assets/images/feature1.jpg";
import feature2 from "@/assets/images/feature1.jpg";
import feature3 from "@/assets/images/feature1.jpg";
import feature4 from "@/assets/images/feature1.jpg";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="px-custom space-y-12 sm:space-y-24">
                <div className="mt-60 flex items-center justify-between space-x-2">
                    <h2 className="max-w-[220px] font-bold sm:max-w-xs sm:text-xl md:max-w-md md:text-3xl">
                        Start emailing like you chat, but with superpowers
                    </h2>
                    <hr className="w-1/2" />
                </div>

                <div className="flex flex-col items-center gap-y-14 sm:flex-row sm:items-start sm:justify-between sm:gap-x-8">
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
        </>
    );
}
