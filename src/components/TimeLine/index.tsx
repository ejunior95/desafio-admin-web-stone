import React from 'react';
import { Container } from './styles';


interface IProps {
  audits: IAudit[]
}

interface ICard {
  id: number;
  metadatas: { 
      name?: string;
      digits: number;
      limit: number;
  };
  createdAt: string;
  updatedAt?: string;
  status: string;
}

interface IAudit {
  type: string;
  createdAt: string;
  before: ICard;
  after: ICard
}

const TimeLine = (props:IProps) => {
  
  const {
    audits
  } = props

  return (
  
  <Container>
          
        <div className="timeline">

          <ul>
            {audits.map(audit => (
              <>
              <li>
                  <div className="content">
                      <h3>{audit.type}</h3>
                      <p><strong>DEPOIS</strong></p>
                      <p>Status: {audit.after.status}</p>
                  </div>
                  <div className="time">
                      <h4>{audit.createdAt}</h4>
                  </div>
              </li>
              <li>
                  <div className="content">
                      <h3>{audit.type}</h3>
                      <p><strong>ANTES</strong></p>
                      <p>Status: {audit.before.status}</p>
                  </div>
                  <div className="time">
                      <h4>{audit.createdAt}</h4>
                  </div>
              </li>
              </>
                ))}
              

              <div className="intervalo" />
          </ul>

        </div>
      </Container>
  );
}

export default TimeLine;