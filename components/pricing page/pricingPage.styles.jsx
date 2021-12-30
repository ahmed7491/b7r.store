import styled from "styled-components";
import { Breakpoints } from "../../constants/index"

export const PricingPageContainer = styled.div`
  background-color: ${(props) => props.theme.customColors.white};
  direction: rtl;
  text-align: center;
  .btn-2 {
    color: ${(props) => props.theme.colors.skyBlue};
    background-color: ${(props) => props.theme.customColors.white};
    border: none;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    box-shadow: none;
    .plus-minus{
      margin: 8px;
    }
  }

  .monthly{
        font-weight: 400;
        line-height: 28px;
        font-size: 14px;
        margin-bottom: 9px;
        color: ${(props) => props.theme.colors.Gray6};
        @media screen and (max-width: ${Breakpoints.sm}){
            font-size: 12px;
        }
    }
  .feature-number{
    font-size: 18px;
    color: ${(props) => props.theme.customColors.primary};
    font-weight: 400;
    line-height: 24px;
    
    @media screen and (max-width: ${Breakpoints.sm}){
      font-size: 16px;
      
    }
    @media screen and (max-width: ${Breakpoints.md}){
      display: block;
      width: 24px;
      text-align: center;
      
    }

  }
  .featureSection-header{
    font-size: 24px;
    color: ${(props) => props.theme.colors.skyBlue};
    font-weight: 600;
    padding: 12px 0px;
    @media screen and (max-width: ${Breakpoints.xs}){
      font-size: 18px;
    }
  }
  .featureSection-header-table{
    font-size: 20px;
    color: ${(props) => props.theme.colors.skyBlue};
  }
  .feature-title{
    font-size: 18px;
    color: ${(props) => props.theme.colors.Gray2};
    font-weight: 400;
    line-height: 24px;

    @media screen and (max-width: ${Breakpoints.md}){
      font-size: 16px;
    }
    @media screen and (max-width: ${Breakpoints.sm}){
      font-size: 14px;
    }
    @media screen and (max-width: 375px){
      font-size: 12px;
    }
  }

  .bestSeller-card{
  border: 1.5px solid ${(props) => props.theme.colors.Green};
}
`;

export const TopBanner = styled.div`
  text-align: center;
  margin-bottom: 64px;
  padding: 65px 0px;
  background-color: ${(props) => props.theme.backgroundColors.lightBlue};

  .upper-header{
    color: ${(props) => props.theme.customColors.dark};
    font-weight: 600;
    @media screen and (max-width: ${Breakpoints.md}){
      font-size: 24px;
    }
    @media screen and (max-width: ${Breakpoints.sm}){
      font-size: 22px;
    }
  }
  .upper-description {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.Gray2};
    @media screen and (max-width: ${Breakpoints.sm}){
      font-size: 14px;
    }
  }
  .btn-1 {
    width: 229px;
    height: 56px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.skyBlue};
    font-size: 20px;
    @media screen and (max-width: ${Breakpoints.md}){
      width: 215px;
    }
    @media screen and (max-width: ${Breakpoints.sm}){
      width: 169px;
      font-size: 16px;
    }
  }
`;

export const PricingCard = styled.div`
  padding: 40px 30px;
  overflow: hidden;
  position: relative;
  direction: rtl;
  border: 1.5px solid ${(props) => props.theme.colors.Gray7};
  border-radius: 16px;

  .header {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.customColors.dark};
  }
  .card-price{
    font-size: 38px;
    line-height: 48px;
    color: ${(props) => props.theme.customColors.dark};
    font-weight: 700;
    @media screen and (max-width: ${Breakpoints.sm}){
      font-size: 34px;
    }
  }
  .duration-pay {
    font-size: 22px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.Gray6};
    margin-bottom: 9px;
  }
  .description {
    max-width: 280px;
    font-size: 19px;
    line-height: 25px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.Gray1};
  }

 
`;

export const Badge = styled.div`
  position: absolute;

  top: 21px;
  left: -1px;
  background: ${(props) => props.theme.colors.Green};
  z-index: 10;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  height: 24px;
  width: 130px;
  align-items: center;
  color: white;
  display: grid;

  &:after {
    content: "";

    height: 0;
    width: 0;
    display: block;
    z-index: 99999;
    position: absolute;
    top: 0px;
    right: 0;
    border-top: 12px solid transparent;
    border-right: 8px solid white;
    border-bottom: 12px solid transparent;
  }
`;