import styled from "styled-components";

export const TabPaneContainer = styled.div`
padding: 75px 0px;

.tabName-type{
    font-size: 18px;
    color: #4F4F4F;
    @media screen and (max-width: 426px){
        font-size: 16px;
    }
    
}

.tabName-description{
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 0px;

    .price{
        font-weight: 700;
        line-height: 28px;
        font-size: 18px;
        color: #163663;
        @media screen and (max-width: 426px){
            font-size: 16px;
        }
        @media screen and (max-width: 376px){
            font-size: 12px;
        }
        @media screen and (max-width: 321px){
            min-width: 10px;
        }
    }

    
}


.ant-tabs-nav{
    position: sticky;
    z-index: 1;
    top: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
}

.ant-tabs-tab{
    padding: 0px;
}

.tab-tail{
    display: flex;
    margin: 16px 0px;
    justify-content: space-evenly;
}

    .inner-Table{
        text-align: start;
        padding-left: 30px;
        /* :first-child{
            color: orange;
            background-color: red;
        } */
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