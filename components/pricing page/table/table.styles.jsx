import styled from "styled-components";

export const PricingTableContainer = styled.div`
padding: 33px 0px;
padding-bottom: 160px;

.bestSeller-Row {
  padding: 9px 0px;
  margin-bottom: 0px;
  max-width: 230px;
  background-color: ${(props) => props.theme.colors.Green};
  border: 1px solid ${(props) => props.theme.colors.Green};
  font-size: 13px;
  line-height: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.customColors.white};

  .bestSeller-description{
    font-size: 13px;
    font-weight: 700;
    color: ${(props) => props.theme.customColors.white};
  }
}

.silver-Row {
  border-right: 1px solid ${(props) => props.theme.colors.Green};
  background-color: ${(props) => props.theme.customColors.white};
}
.advanced-Row{
  border-right: 1px solid ${(props) => props.theme.colors.Gray8};
  background-color: ${(props) => props.theme.customColors.white};
}
.gold-Row{
  border-right: 1px solid ${(props) => props.theme.colors.Green};
  background-color: ${(props) => props.theme.customColors.white};
}

.feature-Row{
  background-color: ${(props) => props.theme.customColors.white};
}

.init-Row{
  background-color: ${(props) => props.theme.customColors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.Gray8};
  ::before{
    display: none;
  }
}

.table-section {
    direction: rtl;
    border-right: 1px solid ${(props) => props.theme.colors.Gray7};
    border-left: 1px solid ${(props) => props.theme.colors.Gray7};
    border-bottom: 1px solid ${(props) => props.theme.colors.Gray7};
   
}
.table-row-light > :first-child {
  background-color: ${(props) => props.theme.customColors.lightBlue};
}

.table-type{
  font-style: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.Gray2};
}

.price{
  font-weight: 700;
  line-height: 28px;
  font-size: 18px;
  color: ${(props) => props.theme.customColors.dark};
}
.main-tableHeader{
  font-size: 26px;
  color: ${(props) => props.theme.customColors.dark};
}
`;