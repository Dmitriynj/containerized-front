import React, { useState } from 'react';
import './Example.css';
import { groupBy, map, uniqueId, filter } from 'lodash';

type Product = {
  id: number;
  name: string;
  price: string;
  stocked: boolean;
  category: string;
};
type FilterableProductTableType = {
  products: Product[];
};

const FilterableProductTable = ({ products }: FilterableProductTableType) => {
  const [text, setText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const onChangeInput = (input: string) => {
    setText(input);
  };

  const onChangeCheckbox = () => {
    setInStockOnly(!inStockOnly);
  };

  return (
    <>
      <SearchBar
        text={text}
        isChecked={inStockOnly}
        onChangeInput={onChangeInput}
        onChangeCheckbox={onChangeCheckbox}
      />
      <ProductTable text={text} inStockOnly={inStockOnly} products={products} />
    </>
  );
};

type SearchBarType = {
  isChecked: boolean;
  text: string;
  onChangeInput(input: string): void;
  onChangeCheckbox(): void;
};

const SearchBar = ({
  isChecked,
  text,
  onChangeInput,
  onChangeCheckbox,
}: SearchBarType) => {
  return (
    <>
      <input
        type='text'
        value={text}
        placeholder='Search'
        onChange={(e) => onChangeInput(e.target.value)}
      ></input>
      <div>
        <input
          id='show-products-in-stock'
          type='checkbox'
          checked={isChecked}
          onChange={() => onChangeCheckbox()}
        ></input>
        <label htmlFor='show-products-in-stock'>
          Only show products is stock
        </label>
      </div>
    </>
  );
};

type ProductTableType = {
  products: Product[];
  text: string;
  inStockOnly: boolean;
};

const ProductTable = ({
  inStockOnly,
  text,
  products,
}: ProductTableType) => {
  const filteredProducts = filter(products, (product) => {
    return (
      (text !== '' ? product.name.includes(text) : true) &&
      (inStockOnly ? product.stocked : true)
    );
  });
  const groupedProducts = groupBy(filteredProducts, 'category');

  const productsLists = map(
    groupedProducts,
    (products: Product[], categoryName: string) => {
      const list = map(products, (product) => {
        return (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          ></ProductRow>
        );
      });
      return (
        <div key={uniqueId()}>
          <h4>{categoryName}</h4>
          {list}
        </div>
      );
    }
  );

  return (
    <div className='table'>
      <div className='product-row'>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {productsLists}
    </div>
  );
};

const ProductRow = ({
  name,
  price,
  stocked,
}: {
  name: string;
  price: string;
  stocked: boolean;
}) => {
  const stockedMode = stocked ? '__stocked' : '';
  return (
    <div className={`product-row${stockedMode}`}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export { FilterableProductTable };
