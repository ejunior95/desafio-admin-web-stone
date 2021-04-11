import React from 'react';
import { Container } from './styles';

const TimeLine: React.FC = () => {
  return (
      <Container>
          <ul>
              
              <li>
                  <div className="content">
                      <h3>Whats is Lorem Ipsum?</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
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
              
              <li>
                  <div className="content">
                      <h3>Whats is Lorem Ipsum?</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries.</p>
                  </div>
                  <div className="time">
                      <h4>11/04/2021 - 11:20</h4>
                  </div>
              </li>

          </ul>
      </Container>
  );
}

export default TimeLine;