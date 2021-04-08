import axios from 'axios';
import { useEffect, useContext } from 'react';
import {createContext, ReactNode, useState} from 'react';
import { ToastContext } from './ToastContext';
  
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
    permissoes: {
      n1: boolean;
      n2: boolean
    };
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
  const { showToastMessage } = useContext(ToastContext);

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
            showToastMessage('erro',"Erro na comunicação com o servidor!")
            //<ToastMessage type={'erro'} text={"Não foi possível realizar o login!"} />
            return 
          }
          
          const analystEncontrado = res.data.filter(analyst => 
            analyst.email === email && 
            analyst.password === senha
        )
        const logado = analystEncontrado[0]
        if (!logado) {
          showToastMessage('erro',"Não foi possível realizar o login!")
            return 
            // <ToastMessage type={'erro'} text={"Não foi possível realizar o login!"} />
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
          permissoes: {
            n1 : analystLogado.roles?.filter(role => role === 'n1').length > 0,
            n2 : analystLogado.roles?.filter(role => role === 'n2').length > 0,
          },
          encerrarSessao
      }}> 
      {children}
      </AnalystContext.Provider>
  );}