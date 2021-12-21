import styled from "styled-components";

export const CardsContainer = styled.div`
  background: rgb(252, 252, 252);
  padding: 64px 0px;
  direction: rtl;

  .header-title {
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 48px;
    color: rgb(22, 54, 99);
    text-align: center;
  }
  .card {
    padding: 27px;
    height: 476px;
    width: 296px;
    margin: 0px auto 47px;
    box-shadow: rgb(78 78 78 / 14%) 0px 10px 30px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }
  .description{
    font-size: 16px;
    line-height: 24px;
    color: rgb(130, 130, 130);
  }
`;
