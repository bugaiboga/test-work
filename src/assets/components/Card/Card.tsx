import React from "react";
import { Link } from "react-router-dom";

import { CardListItem } from "./CardListItem";

interface CardProps {
  name: string;
  id: string;
  companyName: string;
  city: string;
}

export const Card = ({ name, companyName, city, id }: CardProps) => {
  return (
    <article className="card">
      <ul className="card__list">
        <CardListItem category="ФИО" description={name} />
        <CardListItem category="город" description={city} />
        <CardListItem category="компания" description={companyName} />
      </ul>
      <Link className="card__link" to={id}>
        Подробнее
      </Link>
    </article>
  );
};
