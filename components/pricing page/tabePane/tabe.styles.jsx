import styled from "styled-components";

export const TabPaneContainer = styled.div`
padding: 75px 0px;

.ant-tabs-nav{
    position: sticky;
    z-index: 1;
    top: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
}
 

    .inner-Table{
        text-align: start;
        padding: 0px 30px;
        @media screen and (max-width: 768px){
            min-width: 735px;
        }
        @media screen and (max-width: 426px){
            min-width: 392px;
        }
        @media screen and (max-width: 376px){
            min-width: 342px;
        }
        @media screen and (max-width: 321px){
            min-width: 288px;
        }

        @media (max-width: 576px) {
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
    }
  }
 
    }
`