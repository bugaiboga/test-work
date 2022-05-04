import { IUser } from "../../types/IUser";

export const fetchUsers = () => {
  return new Promise<IUser[] | null>((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response
          .json()
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
