/* 404 Page - Displays when a user attempts to access a non-existent route - translate to the language of the user */
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-amber-400 mb-4 font-mono">404</h1>
        <p className="text-xl font-bold mb-2">Página não encontrada</p>
        <p className="text-slate-400 text-sm mb-6">
          O link acessado não está disponível ou foi movido.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform"
        >
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  )
}

export default NotFound
