import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
          <OptionSize 
          sizes={props.sizes}
          size={props.size} 
          currentSize={props.currentSize}
          setCurrentPrice={props.setCurrentPrice}
          setCurrentSize={props.setCurrentSize} />
          <OptionColor
            colors={props.colors}
            currentColor={props.currentColor}
            setCurrentColor={props.setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

export default ProductForm;