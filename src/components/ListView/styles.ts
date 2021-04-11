import styled from 'styled-components';

export const Container = styled.div`
   
   ul {
       list-style: none;
       width: 100%;
       height: 53vh;
       overflow: hidden;
       overflow-y: scroll;
       border: 1px solid #30363D;
       color: #ffffff;
       border-radius: 10px;
       line-height: 30px;
       padding: 5px;
   }

   li {
       padding-left: 10px;
       cursor: pointer;
    }

   li:hover {
     background-color: #2f3640;
     border-radius: 5px;
    }
`;
