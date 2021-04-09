import React from 'react';
import { Container } from './styles';

const DataGrid: React.FC = () => {
  return(
      <Container>
          <table>
                <tr>
                  <th>Nome de usuário</th>
                  <th>Data da requisição</th>
                  <th>Verificado</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>Austria</td>
                </tr>
          </table>
      </Container>
  );
}

export default DataGrid;