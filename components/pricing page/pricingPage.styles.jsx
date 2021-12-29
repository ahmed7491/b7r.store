import styled from "styled-components";

export const PricingPageContainer = styled.div`
  background-color: #fff;
  text-align: center;
  .btn-2 {
    color: #1985a1;
    border: none;
    font-size: 18px;
    font-weight: 700;
  }
  .feature-number{
    font-size: 18px;
    color: #163663;
    font-weight: 400;
    line-height: 24px;
    padding-right: 12px;
    @media screen and (max-width: 426px){
      font-size: 16px;
      padding-right: 15px;
    }
    @media screen and (max-width: 320px){
      padding-right: 9px;
      margin-left: 5px;
    }

  }
  .featureSection-header{
    font-size: 24px;
    color: #1985A1;
    font-weight: 600;
    padding: 12px 0px;
    @media screen and (max-width: 320px){
      font-size: 18px;
    }
  }
  .featureSection-header-table{
    font-size: 20px;
    color: #1985A1; 
  }
  .feature-title{
    font-size: 18px;
    color: #4F4F4F;
    font-weight: 400;
    line-height: 24px;

    @media screen and (max-width: 768px){
      font-size: 16px;
    }
    @media screen and (max-width: 426px){
      font-size: 14px;
    }
    @media screen and (max-width: 375px){
      font-size: 12px;
    }
  }

  .bestSeller-card{
  border: 1.5px solid #2CB87A;
}
`;

export const TopBanner = styled.div`
  text-align: center;
  margin-bottom: 64px;
  padding: 65px 0px;
  background-color: #eaf5ff;

  .upper-header{
    color: #37474F;
    font-weight: 600;
    @media screen and (max-width: 768px){
      font-size: 24px;
    }
    @media screen and (max-width: 376px){
      font-size: 22px;
    }
  }
  .upper-description {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: #4f4f4f;
    @media screen and (max-width: 426px){
      font-size: 14px;
    }
  }
  .btn-1 {
    width: 229px;
    height: 56px;
    border-radius: 4px;
    background-color: var(--lightBlue);
    font-size: 20px;
    @media screen and (max-width: 768px){
      width: 215px;
    }
    @media screen and (max-width: 376px){
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
  border: 1.5px solid #e0e0e0;
  border-radius: 16px;

  .header {
    display: flex;
    align-items: center;
    color: var(--darkBlue);
  }
  .card-price{
    font-size: 38px;
    line-height: 48px;
    color: #37474F;
    font-weight: 700;
    @media screen and (max-width: 376px){
      font-size: 34px;
    }
  }
  .duration-pay {
    font-size: 22px;
    line-height: 24px;
    color: #bdbdbd;
  }
  .description {
    max-width: 280px;
    font-size: 19px;
    line-height: 25px;
    font-weight: 400;
    color: #828282;
  }

 
`;

export const Badge = styled.div`
  position: absolute;

  top: 21px;
  left: -1px;
  background: #2cb87a;
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