import AdminLayout from "@/Component/Layout/AdminLayout";

const { default: RecentOrdersPage } = require("@/Component/Admin/Order/OrderData")

const allOrder=()=>{
    return(
        <>   
        <RecentOrdersPage />
      
        </>
    )
}

export default allOrder;

allOrder.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
  };