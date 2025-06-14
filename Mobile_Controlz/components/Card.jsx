import styles from '../styles/Card.module.css';

const Card = ({ image, title, price, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardPrice}>${price}</p>
        <button 
          className={styles.addToCartButton}
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
