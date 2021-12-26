import styled from "styled-components";

export const PricingTableContainer = styled.div`
padding: 33px 0px;
padding-bottom: 160px;

.bestSeller-Row {
  padding: 9px 0px;
  margin-bottom: 0px;
  max-width: 230px;
  background-color: #2cb87a;
  border: 1px solid #2CB87A;
  font-size: 13px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
}

.silver-Row {
  border-right: 1px solid #2CB87A;
  background-color: #fff;
}
.advanced-Row{
  border-right: 1px solid #E7E7ED;
  background-color: #fff;
  /* background-color: ${(props)=>(props.colSpan === '4'? "#14333b" : null)}; */
}
.gold-Row{
  border-right: 1px solid #2CB87A;
  background-color: #fff;
}

.feature-Row{
  background-color: #fff;
}

.init-Row{
  background-color: #fff;
  border-bottom: 1px solid #E7E7ED;
}

.table-section {
    direction: rtl;
    border-right: 1px solid #E0E0E0;
    border-left: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
   
}
/* .ant-table{
  font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #4F4F4F;
} */
`;