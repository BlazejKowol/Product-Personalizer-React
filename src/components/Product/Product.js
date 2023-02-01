import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);
  
  const getPrice = () => {
    return (
      props.basePrice + currentPrice
    )};

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes?.map(size => <li key={shortid()}>
                <button type="button" className={size.name && currentSize === size.name ? styles.active : undefined}
                onClick={() => 
                {setCurrentSize(size.name);
                setCurrentPrice(size.additionalPrice)}}>
                  {`${size.name}`}
                  </button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors?.map(color => <li key={shortid()}>
                <button type="button" className={clsx(prepareColorClassName(color),
                currentColor === color && styles.active)}
                onClick={() => setCurrentColor(color)}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {props: PropTypes.func.isRequired}

export default Product; 

/* const getPrice = () => {
    return (
      props.baseBrice + setCurrentPrice(additionalPrice)
    )}

*/ 
