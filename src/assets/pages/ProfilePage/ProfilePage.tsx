import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Form } from "../../components/Form/Form";
import { IUser } from "../../types/IUser";
import { fetchUser } from "../../utills/fetch/fetchUser";

export const ProfilePage = () => {
  const [profile, setProfile] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchUser(params.id)
        .then((response) => {
          setProfile(response);
        })
        .catch((error) => {
          setProfile(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.id]);

  return (
    <section className="profile">
      <div className="profile__top">
        <h3 className="profile__title">Профиль пользоваетля</h3>
        <button className="btn" onClick={() => setReadOnly(!readOnly)}>
          Редактироввать
        </button>
      </div>
      {loading ? "загрузка..." : <Form readOnly={readOnly} profile={profile} />}
    </section>
  );
};
