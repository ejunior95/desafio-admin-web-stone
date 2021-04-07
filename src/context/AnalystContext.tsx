import axios from 'axios';
import { useEffect } from 'react';
import {createContext, ReactNode, useState} from 'react';
  
  interface IUser {
    id: number;
    name: string;
  }

  interface IAnalyst {
    id: number;
    user_id: number;
    nome_user?: string;
    email: string;
    password: string;
    roles: string[];
  }

  interface IContextData {
    validarLogin: (email:string, senha:string) => void;
    analystLogado: IAnalyst;
    isLogado: boolean;
    encerrarSessao: () => void
  }
  
  interface IProviderProps {
    children : ReactNode
  }

export const AnalystContext = createContext({} as IContextData);

export function AnalystProvider({
    children
  }: IProviderProps) {
    
  const [analystLogado, setAnalystLogado] = useState({} as IAnalyst)


  const url =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:3001/api";
    useEffect(() => {
        const analystLogado_ = localStorage.getItem('@SistemaCredRock/analystlogado')
        if (!analystLogado_) return 
        setAnalystLogado(JSON.parse(analystLogado_))
    },[])

    async function recuperarNome(user_id: number) {
        let res
        try {
         res = await axios.get<IUser[]>(`${url}/users`)
        } catch (error) {
         return ''    
        }
        const nomeEncontrado =  res.data.filter(user => user.id === user_id)
        return nomeEncontrado[0]?.name
    }

    async function validarLogin(email:string, senha:string) {
        let res
        try {
           res = await axios.get<IAnalyst[]>(`${url}/analysts`)
          } catch (error) {
            alert('Não deu certo!')
            return
          }
          
          const analystEncontrado = res.data.filter(analyst => 
            analyst.email === email && 
            analyst.password === senha
        )
        const logado = analystEncontrado[0]
        if (!logado) {
            alert('Não deu certo!')
            return
        }
        const nome_user = await recuperarNome(logado.user_id)
        const analista = {
            ...logado,
            nome_user
        }
        localStorage.setItem('@SistemaCredRock/analystlogado',JSON.stringify(analista))
        setAnalystLogado(analista)
      }
      function encerrarSessao() {
        localStorage.removeItem('@SistemaCredRock/analystlogado')
        setAnalystLogado({} as IAnalyst)
      }
  return (
      <AnalystContext.Provider value={{
          validarLogin,
          analystLogado,
          isLogado : Object.keys(analystLogado).length > 0,
          encerrarSessao
      }}> 
      {children}
      </AnalystContext.Provider>
  );}