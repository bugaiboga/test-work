import React, { useState } from "react";

import { IUser } from "../../types/IUser";
import { validateCity } from "../../utills/form/validateCity";
import { validateEmail } from "../../utills/form/validateEmail";
import { validateName } from "../../utills/form/validateName";
import { validatePhone } from "../../utills/form/validatePhone";
import { validateStreet } from "../../utills/form/validateStreet";
import { validateUserName } from "../../utills/form/validateUserName";
import { validateWebsite } from "../../utills/form/validateWebsite";
import { validateZipCode } from "../../utills/form/validateZipCode";
import { Input } from "../Input/Input";

interface FormProps {
  readOnly: boolean;
  profile: IUser | null;
}

interface IValues {
  name: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  street: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  comment: string;
}

export const Form = ({ readOnly, profile }: FormProps) => {
  const [values, setValues] = useState<IValues>({
    name: profile?.name,
    userName: profile?.username,
    email: profile?.email,
    street: profile?.address.street,
    city: profile?.address.city,
    zipCode: String(profile?.address.zipcode),
    phone: profile?.phone,
    website: profile?.website,
    comment: "",
  });

  const handleChange =
    (prop: keyof IValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const validateInputName = validateName(values.name);
  const validateInputUserName = validateUserName(values.userName);
  const validateInputEmail = validateEmail(values.email);
  const validateInputStreet = validateStreet(values.street);
  const validateInputCity = validateCity(values.city);
  const validateInputZipCode = validateZipCode(values.zipCode);
  const validateInputPhone = validatePhone(values.phone);
  const validateInputWebsite = validateWebsite(values.website);

  const sendData = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (
      validateInputName &&
      validateInputUserName &&
      validateInputEmail &&
      validateInputStreet &&
      validateInputCity &&
      validateInputZipCode &&
      validateInputPhone &&
      validateInputWebsite
    ) {
      console.log(JSON.stringify(values));
    }
  };

  return (
    <form className="form">
      <fieldset className="form-inputs" disabled={readOnly}>
        <Input
          error={readOnly ? true : validateInputName}
          text="??????"
          value={values.name}
          onChange={handleChange("name")}
        />
        <Input
          error={readOnly ? true : validateInputUserName}
          text="?????? ????????????????????????"
          value={values.userName}
          onChange={handleChange("userName")}
        />
        <Input
          error={readOnly ? true : validateInputEmail}
          text="??-????????"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
        />
        <Input
          error={readOnly ? true : validateInputStreet}
          text="??????????"
          value={values.street}
          onChange={handleChange("street")}
        />
        <Input
          error={readOnly ? true : validateInputCity}
          text="??????????"
          value={values.city}
          onChange={handleChange("city")}
        />
        <Input
          error={readOnly ? true : validateInputZipCode}
          text="???????????????? ????????????"
          value={values.zipCode}
          onChange={handleChange("zipCode")}
        />
        <Input
          error={readOnly ? true : validateInputPhone}
          text="??????????????"
          value={values.phone}
          onChange={handleChange("phone")}
        />
        <Input
          error={readOnly ? true : validateInputWebsite}
          text="????????"
          value={values.website}
          onChange={handleChange("website")}
        />
        <label>
          <p className="input__text">??????????????????????</p>
          <textarea
            className="form-textarea input"
            onChange={handleChange("comment")}
            value={values.comment}
          ></textarea>
        </label>
        <input
          className={`form-btn btn ${
            readOnly ? "btn__secondary" : "btn__primary"
          }`}
          type="submit"
          onClick={sendData}
          disabled={readOnly}
        />
      </fieldset>
    </form>
  );
};
