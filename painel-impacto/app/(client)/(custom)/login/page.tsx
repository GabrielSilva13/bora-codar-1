'use client'

import { useState } from 'react'
import { LogoFull } from '../../_components/svg/logo'
import Spinner from '../../_components/general/Spinner'
import SocialButton from './_components/SocialButton'
import {
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from '../../_components/svg/socialMedia'

export default function Login() {
  // Const
  const inputStyle =
    'text-bx-blue-900 w-full h-12 text-base bx-element border-0 outline-0 ring-2 ring-bx-black-200 focus:ring-bx-blue-600 focus:ring-2 rounded-md px-5 py-3'

  // States
  const [credential, setCredential] = useState({ login: '', password: '' })
  const [credentialNotFound, setCredentialNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Handlers
  async function handleLogin() {
    setIsLoading(true)
    const result = false
    if (result) {
      window.location.href = '/' // Redirect to home page
    } else {
      setCredentialNotFound(true)
    }
    setIsLoading(false)
  }

  return (
    <div className="flex lg:items-center lg:justify-center h-screen w-screen bg-white lg:bg-bx-white-400">
      <div className="lg:bx-element overflow-hidden bg-white relative lg:max-w-[96%] lg:w-[74rem] w-full flex lg:max-h-[96%] lg:h-[34rem] h-fit items-center justify-center lg:flex-row flex-col-reverse">
        <div className="flex flex-col w-full mx-auto p-5 lg:w-[50%] lg:px-12">
          <div className="flex relative w-full justify-between items-center">
            <strong className="text-bx-blue-900 text-3xl font-bold lg:text-left text-center block mb-6 lg:mt-4 mt-56">
              Painel Gerencial
            </strong>
          </div>
          <div className="flex flex-col gap-5 flex-1 w-full items-center lg:items-start">
            <input
              className={inputStyle}
              type="email"
              value={credential.login}
              onChange={(e) =>
                setCredential({ ...credential, login: e.target.value })
              }
              placeholder="Usuário"
              autoFocus
              required
            />
            <input
              className={inputStyle}
              type="password"
              value={credential.password}
              onChange={(e) =>
                setCredential({ ...credential, password: e.target.value })
              }
              placeholder="Senha"
              required
            />

            <button
              className="bg-bx-blue-500 flex items-center justify-center w-full h-12 rounded-md text-base font-medium disabled:opacity-80 disabled:cursor-not-allowed"
              type="submit"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="mt-2">
                  <Spinner spinnerSize="1.9rem" />
                </div>
              ) : (
                'Entrar'
              )}
            </button>
            <span className="font-medium text-red-400 leading-none h-1">
              {credentialNotFound ? 'Usuário ou senha incorretos' : ''}
            </span>
          </div>

          <div className="flex justify-center items-center lg:gap-3 gap-1 w-full mt-8">
            <div className="flex-1 h-[1px] bg-bx-white-700" />
            <span className="text-bx-white-800 text-base">Conectar-se com</span>
            <div className="flex-1 h-[1px] bg-bx-white-700" />
          </div>
          <div className="flex items-center gap-5 mt-7 justify-center">
            <SocialButton
              Icon={FacebookIcon}
              pathname="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              backgroundColor="#4064AC"
            />
            <SocialButton
              Icon={TwitterIcon}
              pathname="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              backgroundColor="#1C9CEA"
            />
            <SocialButton
              Icon={GoogleIcon}
              pathname="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              backgroundColor="#D64937"
            />
          </div>

          <div className="text-bx-white-800 text-base flex items-center mt-10 gap-6 lg:flex-row flex-col">
            <span className="font-bold">Esqueceu a senha?</span>
            <span>
              Não tem uma conta?
              <button className="ml-2 bg-bx-blue-500 text-bx-white-200 p-1 leading-1 text-sm rounded-md font-medium">
                Criar Conta
              </button>
            </span>
          </div>
        </div>

        <div className="flex lg:static absolute -top-5 w-screen lg:w-2/4 lg:h-[550px] h-[197px] ml-auto items-center justify-center bg-bx-turquoise-blue-500 bg-cover bg-center">
          <LogoFull
            blueToWhite={true}
            greenToWhite={true}
            className="w-80 lg:w-[30rem] max-w-[90%]"
          />
        </div>
      </div>
    </div>
  )
}
