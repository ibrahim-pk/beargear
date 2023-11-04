import { Image } from "antd";

const SupportUs = () => {
  return (
    <div className="support">
      <h2>Who suport us</h2>
      <div>
        <Image
          src="/image/rakmari.png"
          alt=""
          width={100}
          height={50}
          responsive="true"
        />
        <Image
          src="/image/darazLogo.png"
          alt=""
          width={100}
          height={50}
          responsive="true"
        />
      </div>
    </div>
  );
};

export default SupportUs;
