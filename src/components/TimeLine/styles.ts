import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 200vh;
    padding-top: 50px;

  .timeline {
    position: relative;
    width: 100%;
    height: 100%;
    color: #ffffff;
    }
  
   .timeline:before {
      content: '';
      position: absolute;
      left: 50%;
      width: 2px;
      height: 100%;
      background-color: #30363D;
  }

  ul {
    margin: 0;
    padding:0;
  }

  ul li {
    list-style: none;
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  ul li:nth-child(odd) {
      float: left;
      text-align: right;
      clear: both; 
  }
  ul li:nth-child(even) {
      float: right;
      text-align: left;
      clear: both;
  }

  .intervalo {
      clear: both;
  }

  .content {
      padding-bottom: 20px;
  }

  ul li:nth-child(odd):before {
      content: '';
      position: absolute;
      top: 24px;
      right: -8px;
      width: 15px;
      height: 15px;
      background-color:  #238636;
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(35,134,54,0.5);
  }
  
  ul li:nth-child(even):before {
      content: '';
      position: absolute;
      top: 24px;
      left: -7px;
      width: 15px;
      height: 15px;
      background-color:  #238636;
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(35,134,54,0.5);
  }

  ul li h3 {
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
    font-weight: 600;
    color: rgba(35,134,54,0.5);
  }

  ul li p {
      margin: 10px 0 0;
      padding: 0;
  }

  ul li:nth-child(odd) .time {
      position: absolute;
      top: 12px;
      right: -150px;
      margin: 0;
      padding: 8px 16px;
      background-color: #238636;
      border-radius: 5px;
      box-shadow: 0 0 0 3px rgba(0,3px,0,0.2);
  }
  ul li:nth-child(even) .time {
      position: absolute;
      top: 12px;
      left: -150px;
      margin: 0;
      padding: 8px 16px;
      background-color: #238636;
      border-radius: 5px;
      box-shadow: 0 0 0 3px rgba(0,3px,0,0.2);
  }

`;
