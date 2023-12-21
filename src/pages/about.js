import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfilePicture from "../img/studio_meekzIt.png";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { projects } from "../components/data/Projects";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2019;
    return experienceYears;
};

const projectsNumber = (collaboration) => {
    var number = 0;
    var projects = collaboration.map(function (project) {
        number += project.projects.length;
    });
    return number;
};

const collaborationNumber = (collaboration) => {
    return collaboration.length;
};

const About = () => {
    return (
        <>
            <Head>
                <title>About Our Company</title>
                <meta name="description" content="About Our Company" />
                <meta property="og:title" content="About Our Company" />
                <meta property="og:description" content="About Our Company" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:pt-8 ">
                    <AnimatedText
                        text="About Our Company"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                            <p className="text-justify font-medium indent-10">
                                Innovative Solutions: MeekzIT stands out for its commitment to
                                pushing the boundaries of what's possible. We design and implement
                                bespoke IoT solutions tailored to the unique needs of our clients,
                                ensuring they stay ahead in an ever-evolving digital landscape.
                            </p>
                            <p className="text-justify font-medium indent-10 my-4">
                                Reliability and Security: Security is at the core of everything we
                                do. Our robust IoT platforms prioritize data integrity and privacy,
                                providing our clients with a secure foundation for their connected
                                devices.
                            </p>
                            <p className="text-justify font-medium indent-10">
                                End-to-End Capabilities: MeekzIT offers a comprehensive suite of
                                services, encompassing software, hardware, and engineering chips.
                                Whether it's developing cutting-edge software applications,
                                designing innovative hardware solutions, or engineering
                                next-generation chips, we have the expertise to bring your IoT
                                vision to life.
                            </p>
                            <p className="text-justify font-medium indent-10">
                                Scalability: MeekzIT understands the importance of scalability in
                                the digital age. Our solutions are designed to grow seamlessly with
                                your business, ensuring that you are always equipped to meet the
                                demands of the future.
                            </p>
                            <p className="text-justify font-medium indent-10">
                                End-to-End IoT Solutions: From concept to deployment, MeekzIT offers
                                comprehensive IoT solutions that streamline processes, enhance
                                efficiency, and drive innovation.
                            </p>
                            <p className="text-justify font-medium indent-10 my-4">
                                Custom Development: We understand that every business is unique. Our
                                team crafts custom IoT applications and platforms to meet the
                                specific needs and goals of our clients.
                            </p>
                            <p className="text-justify font-medium indent-10">
                                Consulting and Integration: Leveraging our expertise, we provide
                                strategic consulting to help businesses integrate IoT seamlessly
                                into their operations, unlocking new possibilities and driving
                                sustainable growth.
                            </p>
                        </div>

                        <div className="hidden md:block" />
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-6 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={ProfilePicture}
                                alt="Real picture photo"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers
                                        value={collaborationNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Collaborations
                                </h2>
                            </div>
                            <div className="flex flex-col items-end xl:items-center justify-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers
                                        value={projectsNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projets
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers value={experienceYears()} /> +
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Années d&apos;experience
                                </h2>
                            </div>
                        </div> */}
                    </div>

                    <Skills />
                    {/* <Experience /> */}
                    {/* <Education />  */}
                </Layout>
            </main>
        </>
    );
};
export default About;
