import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    border: 1px solid #30363D;
    color: #ffffff;
    border-radius: 10px;
    line-height: 30px;
  }
  th {
      text-align: left;
      border-bottom: 1px solid #30363D;
      border-right: 1px solid #30363D;
      border-left: 1px solid #30363D;
      padding-left: 10px;
  }
  td {
      padding-left: 10px;
  }

  tr:nth-child(even) {
  background-color: #2f3640;
}
`;
