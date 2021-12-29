import React from "react";

import { Typography, Table, Tabs } from "antd";
import { colHeadersNumbers, columns, data } from "./TableData";
import { PricingTableContainer } from "./table.styles";

const { Text } =Typography;

const TableIndexComponent = () => {
  return (
    <PricingTableContainer>
      <Table
        align="right"
        pagination={false}
        bordered={false}
        rowClassName={(record, index) => colHeadersNumbers.includes(index) ? 'table-row-light' :  'table-row-default'}
        className="table-section"
        scroll={{ x: 1000 }}
        columns={columns}
        dataSource={data}
      />
      
    </PricingTableContainer>
  );
};

export default TableIndexComponent;
