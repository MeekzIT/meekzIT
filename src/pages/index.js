import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "./../img/dream_developer.png";
import logoPic from "./../img/studio_meekzIt.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import { useRouter } from "next/router";
import HireMe from "../components/HireMe";
import TransitionEffect from "../components/TransitionEffect";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Meekz IT company</title>
                <meta name="description" content="test" />
                <meta property="og:title" content="test" />
                <meta property="og:description" content="test" />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2">
                            <Image
                                src={logoPic}
                                alt="Meekz IT"
                                className="w-auto h-auto m-auto rounded-full shadow-2xl lg:inline-block lg:w-full"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="We are MeekzIT"
                                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium indent-10 text-justify md:text-sm sm:text-xs">
                                MeekzIT is not just a technology company; we are architects of
                                intelligent ecosystems. Our team of visionaries, engineers, and
                                innovators collaborates to design and implement IoT solutions that
                                transcend boundaries. With a passion for transforming data into
                                actionable insights, we empower businesses and individuals to
                                harness the full potential of connected devices.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="meekzitmedia@gmail.com"
                                    target="_blank"
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                    // download={true}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
            </main>
        </>
    );
}
