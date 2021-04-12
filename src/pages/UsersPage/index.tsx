import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import BannerInfoUser from '../../components/BannerInfoUser';
import ListView from '../../components/ListView';
import { api } from '../../services/api';

interface IUsers {
    id: number;
    name: string;
    email: string;
    BirthDate: string;
    enabledFeatures: number[],
    document: number;
    metadatas: {
    validDocument: boolean;
    verified: boolean
     },
    address: {
    streetNumber: number;
    city: string;
    state: string;
    neighborhood: string;
    postalCode: number
    },
    salaryBase: number;
    }


const UsersPage: React.FC = () => {

  const [users,setUsers] = useState([] as IUsers[]);
  const [selectedUser,setSelectedUser] = useState(0);

  useEffect(() => {
            api.get<IUsers[]>('users')
            .then(res => {
                setUsers(res.data)
            })
        },[])

    const activeUser = users[selectedUser] || {}

  return (
      <Container>
        <BannerInfoUser />
            <div className="conteudo">
                
                <div className="bloco-detalhes-info">

                    <div className="container-text-detalhes-info">
                        <div className="container-nome-email">
                            <h1 className="nome-detalhes-info">{activeUser.name}</h1>
                            <p className="email-detalhes-info">Email: {activeUser.email}</p>
                        </div>
                        <span className="data-nascimento-detalhes-info">Data de nascimento: {activeUser.BirthDate}</span>
                        <span className="data-nascimento-detalhes-info">Documento (CPF/RG): {activeUser.document}</span>
                        <span className="data-nascimento-detalhes-info">Endereço:</span>
                        <span className="data-nascimento-detalhes-info">Rua: {activeUser.address?.neighborhood}, {activeUser.address?.streetNumber}</span>
                        <span className="data-nascimento-detalhes-info">Recursos disponíveis: {activeUser.enabledFeatures} </span>
                        <span className="data-nascimento-detalhes-info">Documentos validados: {activeUser.metadatas?.validDocument}</span>
                        <span className="data-nascimento-detalhes-info">Verificado: {activeUser.metadatas?.verified}</span>
                        <span className="data-nascimento-detalhes-info">{activeUser.address?.city}, {activeUser.address?.state}</span>
                        <span className="data-nascimento-detalhes-info">CEP: {activeUser.address?.postalCode}</span>
                        <span className="salario-base-detalhes-info">Salário base:</span>
                        <h2 className="salario-base-detalhes-info">{activeUser.salaryBase}</h2>
                    </div>

                    <div className="container-lista-users">
                        <ListView itens={users?.map(user => user.name)} setSelectedItem={setSelectedUser}/>
                    </div>
                </div>


            </div>
      </Container>
  );
}

export default UsersPage;