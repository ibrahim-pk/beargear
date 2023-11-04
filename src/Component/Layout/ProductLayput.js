

const ProductLayout = ({ children }) => {

    return (
        <Layout className="layout">
          <Content
            style={{
              padding: '0 50px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item onClick={handleFeture('backpack')}>Backpacks</Breadcrumb.Item>
              <Breadcrumb.Item>Business Bags</Breadcrumb.Item>
              <Breadcrumb.Item>Trolley & Luggages</Breadcrumb.Item>
              <Breadcrumb.Item>Business Bags</Breadcrumb.Item>
              <Breadcrumb.Item>Crossbody Bags</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-content"
              style={{
                background: colorBgContainer,
              }}
            >
             {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
           <div style={{ textAlign: "end", marginRight: "20px" }}>
              <Pagination simple responsive={true} total={50} />
            </div>
          </Footer>
        </Layout>
      );
}

export default ProductLayout;