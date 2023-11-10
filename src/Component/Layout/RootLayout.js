
import BGFooter from "@/Screen/Footer/Footer";
import { Layout} from "antd";
import Subnav from "../Navbar/SubNavbar/Subnav";
import Navbar from "../Navbar/Navbar/Navbar";
import TopNavbar from "../Navbar/Navbar/TopNavbar";
const RootLayout = ({ children }) => {

    return(
        <Layout>
            <TopNavbar />
            <Subnav />
            <Navbar />
            {children}
            <BGFooter />
        </Layout>
    )
}

export default RootLayout;