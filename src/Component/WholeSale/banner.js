import Link from "next/link";

const WholeSaleBanner=()=>{
    return(
        <div>
          <Link href='/wholesale'>
          <img style={{
            width:'100%'
          }} src="/image/whole.png" alt="whole-sale-banner" />
          </Link>
        </div>
    )
}

export default WholeSaleBanner;