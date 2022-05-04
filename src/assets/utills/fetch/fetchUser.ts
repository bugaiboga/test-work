import { IUser } from "../../types/IUser";

export const fetchUser = (id: string) => {
  return new Promise<IUser | null>((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
