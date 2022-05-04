import { Card } from "../../components/Card/Card";
import { IUser } from "../../types/IUser";

interface HomePageProps {
  users: IUser[] | null;
  loading: boolean;
}

export const HomePage = ({ loading, users }: HomePageProps) => {
  return (
    <section className="home">
      <h3 className="home__title">Список пользователей</h3>

      <div className="home__content">
        {loading
          ? "Загрузка..."
          : users?.map((item) => (
              <Card
                key={item.id}
                id={String(item.id)}
                city={item.address.city}
                companyName={item.company.name}
                name={item.name}
              />
            ))}
      </div>
      {!loading && (
        <h5 className="home__subtitle">
          Найдено {users ? users?.length : "0"} пользователей
        </h5>
      )}
    </section>
  );
};
