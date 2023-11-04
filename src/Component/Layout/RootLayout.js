
import BGFooter from "@/Screen/Footer/Footer";
import { Layout} from "antd";
import Subnav from "../Navbar/SubNavbar/Subnav";
import Navbar from "../Navbar/Navbar/Navbar";
const RootLayout = ({ children }) => {

    return(
        <Layout>
            <Subnav />
            <Navbar />
            {children}
            <BGFooter />
        </Layout>
    )
}

export default RootLayout;