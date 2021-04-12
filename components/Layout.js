// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Head>
                <link rel="icon" href="/socet.ico" />
                {/* Bootstrap5 CDNs */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                    crossorigin="anonymous"
                ></link>
                <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/"></link>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <Navbar />
            <Sidebar />
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
