import React from "react";
import ProductCard from "./ProductCard";

function HomePage({products}){
  return (
    <div className="relative">
      <div>
        <img
          src="https://m.media-amazon.com/images/I/71kv6y8hsyL._SX3000_.jpg"
          alt="home-banner"
        />
      </div>
      <section className="absolute w-full top-[20vh] sm:top-[40vh] lg:px-60 px-10 pb-10">
        <div className="w-full flex-col flex sm:flex-row gap-10  mb-10 justify-center items-center">
          <ProductCard
            title={products[0].title}
            price={products[0].price}
            rating={products[0].rating.rate}
            id={products[0].id}
            image={products[0].image}
          />
            <ProductCard
                title={products[1].title}
                price={products[1].price}
                rating={products[1].rating.rate}
                id={products[1].id}
                image={products[1].image}
          />c
          
        </div>
        <div className="w-full sm:flex-row flex-col flex gap-10 flex-wrap px-10 sm:px-0">
            {products.slice(2,products.length - 1).map((product) => (
                <ProductCard key={product.id} title={product.title} price={product.price} rating={product.rating.rate} id={product.id} image={product.image} ></ProductCard>
            )) }
        </div>
      </section>
    </div>
  );
}

export default HomePage;
