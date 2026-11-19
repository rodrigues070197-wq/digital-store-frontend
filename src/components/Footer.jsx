import React from 'react';
import Logo from './Logo';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white px-6 md:px-24 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-dark-gray-2">
        
        {/* Coluna 1: Logo e Redes Sociais */}
        <div className="flex flex-col gap-6">
          <Logo isWhite/>
          <p className="text-light-gray-2 text-sm leading-relaxed">
            A tua loja online de calçado e moda urbana com as melhores coleções e ofertas exclusivas.
          </p>
          <div className="flex items-center gap-6">
            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Informação */}
        <div>
          <h4 className="font-bold text-base mb-4">Informação</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-light-gray-2">
            <li><a href="#sobre" className="hover:text-white">Sobre Drip Store</a></li>
            <li><a href="#seguranca" className="hover:text-white">Segurança</a></li>
            <li><a href="#wishlist" className="hover:text-white">Wishlist</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#trabalhe" className="hover:text-white">Trabalhe conosco</a></li>
            <li><a href="/meus-pedidos" className="hover:text-white">Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h4 className="font-bold text-base mb-4">Categorias</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-light-gray-2">
            <li><a href="/products" className="hover:text-white">Camisetas</a></li>
            <li><a href="/products" className="hover:text-white">Calças</a></li>
            <li><a href="/products" className="hover:text-white">Bonés</a></li>
            <li><a href="/products" className="hover:text-white">Headphones</a></li>
            <li><a href="/products" className="hover:text-white">Tênis</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 className="font-bold text-base mb-4">Contato</h4>
          <p className="text-sm text-light-gray-2 leading-relaxed mb-3">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm text-light-gray-2">(85) 3051-3411</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-light-gray">
        © 2026 Digital College
      </div>
    </footer>
  );
};

export default Footer;