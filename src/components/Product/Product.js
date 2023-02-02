import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);
  
  const getPrice = (a, b) => {
    return a + b 
  }

  const totalPrice = useMemo(() =>
    getPrice(props.basePrice, currentPrice), [props.basePrice, currentPrice]); 

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(props.title, totalPrice, currentSize, currentColor);
    }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <ProductForm 
          title={props.title} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize} 
          sizes={props.sizes}
          size={props.size}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentPrice={setCurrentPrice}
          onClick={props.onClick}
          handleSubmit={handleSubmit}
          getPrice={getPrice}  />
      </div>
    </article>
  )
};

Product.propTypes = {props: PropTypes.any}

export default Product; 