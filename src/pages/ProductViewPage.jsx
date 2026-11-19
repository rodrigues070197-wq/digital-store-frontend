import React from 'react';
import { useParams } from 'react-router-dom';

const ProductViewPage = () => {
  // Pega o ID que veio na URL (ex: /product/1)
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem em Destaque */}
        <div className="bg-white rounded-lg p-8 flex items-center justify-center shadow-xs h-96">
          <img 
            src={`/produc-image-${id || 1}.jpeg`} 
            alt="Produto" 
            className="max-h-full object-contain"
          />
        </div>

        {/* Informações e Botão de Compra (BuyBox) */}
        <div className="flex flex-col gap-4">
          <span className="text-light-gray text-xs font-bold uppercase">Tênis / Casual</span>
          <h1 className="text-dark-gray-2 text-3xl font-bold">K-Swiss V8 - Masculino (Ref. {id})</h1>
          
          <div className="flex items-center gap-3 mt-2">
            <span className="text-dark-gray font-bold text-2xl">R$ 100,00</span>
            <span className="text-light-gray line-through text-lg">R$ 200,00</span>
            <span className="bg-[#E7FF86] text-dark-gray-2 text-xs font-bold px-3 py-1 rounded-full">
              50% OFF
            </span>
          </div>

          <p className="text-light-gray-2 text-sm leading-relaxed mt-2">
            Tênis casual confortável, ideal para o dia a dia e momentos de lazer. Edição limitada com acabamento premium.
          </p>

          <button className="bg-warning text-dark-gray font-bold py-3.5 px-8 rounded-lg mt-4 hover:opacity-90 transition-opacity">
            COMPRAR
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductViewPage;