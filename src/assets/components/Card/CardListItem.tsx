import React from "react";

interface CardListItemProps {
  category: string;
  description: string;
}

export const CardListItem = ({ category, description }: CardListItemProps) => {
  return (
    <li className="card__list-item">
      <p className="card__item-text">{category}:</p>
      <p>{description}</p>
    </li>
  );
};
