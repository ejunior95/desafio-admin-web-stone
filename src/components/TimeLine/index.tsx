import React from 'react';
import { Container } from './styles';

const TimeLine: React.FC = () => {
  return (
      <Container>
          
        <div className="timeline">

          <ul>

              <li>
                  <div className="content">
                      <h3>Whats is Lorem Ipsum?</h3>
                      <p>It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.</p>
                  </div>
                  <div className="time">
                      <h4>11/04/2021 - 11:20</h4>
                  </div>
              </li>
                
              
              <li>
                  <div className="content">
                      <h3>Whats is Lorem Ipsum?</h3>
                      <p>It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.</p>
                  </div>
                  <div className="time">
                      <h4>11/04/2021 - 11:20</h4>
                  </div>
              </li>
              

              <div className="intervalo" />
          </ul>

        </div>
      </Container>
  );
}

export default TimeLine;