import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const HomePage = () => {
  const [produtosEmAlta, setProdutosEmAlta] = useState([]);

  // useEffect executa assim que a página abre para buscar os dados da API
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProdutosEmAlta(data);
      })
      .catch((error) => {
        console.error('Erro ao carregar produtos da API:', error);
      });
  }, []);

  return (
    <div className="py-8">
      <Section 
        title="Produtos em alta" 
        titleAlign="left" 
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={produtosEmAlta} />
      </Section>
    </div>
  );
};

export default HomePage;