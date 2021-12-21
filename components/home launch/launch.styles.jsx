import styled from "styled-components";

export const LaunchContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 100%;
  direction: rtl;

  .title{
    text-align: center;
    color: rgb(22, 54, 99);
    font-weight: 600;
    font-size: 34px;    
  }
  .step-num{
    font-size: 50px;
    font-weight: bold;
    color: rgb(22, 54, 99);
    opacity: 0.78;
  }
  .step-title{
    font-size: 18px;
    line-height: 34px;
    font-weight: bold;
    color: rgb(79, 79, 79);
}
  
  .step-description{
    font-size: 16px;
    line-height: 24px;
    color: rgb(79, 79, 79);
    max-width: 300px;
    margin-bottom: 50px;
  }
`;
