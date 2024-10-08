import React from "react";
import styles from "./Card.module.scss";

function Card({ imgURL, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imgURL, title, price });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={`${process.env.PUBLIC_URL}/img/heart-unliked.svg`}
          alt="unliked"
        />
      </div>
      <img
        width={133}
        height={112}
        src={`${process.env.PUBLIC_URL}${imgURL}`}
        alt="Sneakers"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={
            isAdded
              ? `${process.env.PUBLIC_URL}/img/btn-cheked.svg`
              : `${process.env.PUBLIC_URL}/img/btn-plus.svg`
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
