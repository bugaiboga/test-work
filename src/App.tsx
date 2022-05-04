import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { IUser } from "./assets/types/IUser";
import { PageLayout } from "./assets/components/PageLayout";
import { HomePage } from "./assets/pages/HomePage/HomePage";
import { ProfilePage } from "./assets/pages/ProfilePage/ProfilePage";
import { fetchUsers } from "./assets/utills/fetch/fetchUsers";

export const App = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);

  const sortUsersByName = () => {
    setUsers(
      users && [
        ...users.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        }),
      ]
    );
  };
  const sortUsersByCity = () => {
    setUsers(
      users && [
        ...users.sort((a, b) => {
          if (a.address.city.toLowerCase() < b.address.city.toLowerCase())
            return -1;
          if (a.address.city.toLowerCase() > b.address.city.toLowerCase())
            return 1;
          return 0;
        }),
      ]
    );
  };

  useEffect(() => {
    setLoadingUsers(true);

    fetchUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        setUsers(error);
      })
      .finally(() => {
        setLoadingUsers(false);
      });
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout
              sortUsersByName={sortUsersByName}
              sortUsersByCity={sortUsersByCity}
            />
          }
        >
          <Route
            index
            element={<HomePage users={users} loading={loadingUsers} />}
          />
          <Route path="/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};
