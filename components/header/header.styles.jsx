import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 72px;
    z-index: 99;
    transform: translate3d(0px,0px,0px);
    direction: rtl;

    .page-header{
      height: 66px;
    }
    .btn-1{
      border: none;
      height: 36px;
      font-size: 14px;
      font-weight: 400;
      color: #163663;
      box-shadow: none;
      
    }
    .btn-2{
      background-color: var(--lightBlue);
      width: 142px;
      font-size: 14px;
      color: #fff;
      border-radius: 4px;
    }

`