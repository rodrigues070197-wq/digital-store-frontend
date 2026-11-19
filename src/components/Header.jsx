import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Logo from './Logo';
import miniCart from '../assets/mini-cart.svg';

const Header = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const navigate = useNavigate();

  const realizarBusca = (e) => {
    e.preventDefault();
    if (termoBusca.trim()) {
      navigate(`/products?filter=${encodeURIComponent(termoBusca)}`);
    }
  };

  const estiloLink = ({ isActive }) =>
    isActive
      ? 'text-primary font-bold border-b-2 border-primary pb-1'
      : 'text-dark-gray-2 hover:text-primary pb-1';

  return (
    <header className="bg-white shadow-sm px-6 md:px-24 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/">
            <Logo />
          </Link>

          <form onSubmit={realizarBusca} className="flex-1 max-w-lg relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full bg-light-gray-3 text-dark-gray-2 rounded-lg pl-4 pr-10 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-light-gray hover:text-primary"
            >
              <Search size={20} />
            </button>
          </form>

          <div className="flex items-center gap-6">
            <Link to="/cadastro" className="text-dark-gray-2 underline text-sm hover:text-primary">
              Cadastre-se
            </Link>
            <Link to="/login" className="bg-primary text-white font-bold text-sm px-8 py-2.5 rounded-lg hover:bg-tertiary transition-colors">
              Entrar
            </Link>
            <button className="relative p-2">
              <img src={miniCart} alt="Carrinho" className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-error text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-sm">
          <NavLink to="/" className={estiloLink}>
            Home
          </NavLink>
          <NavLink to="/products" className={estiloLink}>
            Produtos
          </NavLink>
          <NavLink to="/categorias" className={estiloLink}>
            Categorias
          </NavLink>
          <NavLink to="/meus-pedidos" className={estiloLink}>
            Meus Pedidos
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;