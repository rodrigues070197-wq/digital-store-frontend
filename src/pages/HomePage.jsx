import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const produtosFallback = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    price: 200,
    priceDiscount: 100,
    image: '/produc-image-1.jpeg',
  },
  {
    id: 2,
    name: 'Nike Air Max 270',
    category: 'Tênis',
    price: 350,
    priceDiscount: 249.9,
    image: '/produc-image-2.jpeg',
  },
  {
    id: 3,
    name: 'Adidas Ultraboost',
    category: 'Tênis',
    price: 400,
    priceDiscount: 299.9,
    image: '/produc-image-3.jpeg',
  },
  {
    id: 4,
    name: 'Puma RS-X Reinvention',
    category: 'Tênis',
    price: 280,
    priceDiscount: 199.9,
    image: '/produc-image-4.jpeg',
  },
  {
    id: 5,
    name: 'New Balance 574',
    category: 'Tênis',
    price: 320,
    image: '/produc-image-5.jpeg',
  },
];

const HomePage = () => {
  const [produtosEmAlta, setProdutosEmAlta] = useState(produtosFallback);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const lista = Array.isArray(data)
          ? data
          : data.products || data.data || [];
        if (lista.length > 0) {
          setProdutosEmAlta(lista);
        }
      })
      .catch((error) => {
        console.warn('API offline, usando produtos locais:', error);
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