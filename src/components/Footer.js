import Layout from "./Layout";
import Technologies from "./Technologies";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base p-0">
            <Layout className="py-8 md:ps-0 flex items-center justify-evenly xs:flex-col lg:py-6 lg:ps-40 xl:ps-60">
                <div className="xs:mb-3">
                    <div className="">
                        Build with by&nbsp;
                        <span className="underline underline-offset-2">Meekz IT</span>
                    </div>
                    <div className="w-full flex justify-between mx-auto">
                        <Technologies tech1="meekzitmedia@gmail.com" />
                    </div>
                </div>
                <div className="xs:mt-3">
                    <div>{new Date().getFullYear()} &copy; All Rights Reserved</div>
                </div>
            </Layout>
        </footer>
    );
};
export default Footer;
