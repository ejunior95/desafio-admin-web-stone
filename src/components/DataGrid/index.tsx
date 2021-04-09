import React from 'react';
import { Container } from './styles';

interface IProps {
  headers: string[];
  rows:  (string | JSX.Element)[][];
}

const DataGrid: React.FC<IProps> = (props) => {

  const {
    headers,
    rows
  } = props

  return(
      <Container>
          <table>
                <tr>
                  { headers.map(header => <th>{header}</th> )}
                </tr>

                { rows.map(row =>(
                  <tr>
                    {row.map((column,i) => {
                      if (i > headers.length - 1) return 
                      return(
                        <td>{column}</td>
                      )
                    })}  
                  </tr>  
                ))
                } 

          </table>
      </Container>
  );
}

export default DataGrid;