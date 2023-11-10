import { DeliveredProcedureOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="topnavbar"
    >
      <div style={{ display: "flex", gap: "10px" }} className="service">
        <div style={{ display: "flex", gap: "2px" }} className="">
          <PhoneOutlined />
          <h5>Customer Service</h5>
        </div>
        <div style={{ display: "flex", gap: "2px" }} className="">
          <p></p>
        </div>
        <div style={{ display: "flex", gap: "2px" }} className="">
          <DeliveredProcedureOutlined />
          <h5>Delivary Service</h5>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }} className="authOption">
        <div className="s1">
          <h5 ><Link href='/user/login' style={{color:'white'}}>Login</Link></h5>
        </div>
        <div className="s1">
          <p style={{ borderLeft: "1px solid red" }}></p>
        </div>
        <div className="s2">
          <h5><Link href='/user/login' style={{color:'white'}}>Register</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
