import { SubmitHandler, useForm } from "react-hook-form";
import { UserEntity } from "../../../types/types";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { Form } from "react-router-dom";

interface UserFormProps {
  user: UserEntity;
}

type UserValues = {
  avatarUrl: FileList | null;
  name: string;
  nidNo: string;
  phoneNo: string;
  location: string;
  email: string;
};

export const UserForm: React.FC<UserFormProps> = ({ user: { avatarUrl, name, phoneNo, nidNo, location, email } }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserValues>({
    defaultValues: {
      avatarUrl: null,
      name: name,
      nidNo: nidNo,
      phoneNo: phoneNo,
      location: location,
      email: email,
    },
    mode: "onTouched",
  });

  const [isInputDisabled, setIsInputDisabled] = useState({
    name: true,
    nidNo: true,
    phoneNo: true,
    location: true,
    email: true,
  });

  const onSubmit: SubmitHandler<UserValues> = (data) => {
    console.log(data);
  };

  const handleEditClick = (fieldName: keyof UserValues) => {
    setIsInputDisabled((prevState) => {
      return { ...prevState, [fieldName]: false };
    });
  };

  return (
    <Form method="POST" onSubmit={handleSubmit(onSubmit)} className="flex-col margin-center">
      <div className="profile-img vertical self-center">
        <img src={avatarUrl} alt={name} className="border-radius-full" />
        <label htmlFor="profileImage">
          <div className="edit-profile-img flex flex-center">
            <FiEdit2 onClick={() => handleEditClick("avatarUrl")} className="text-medium" />
          </div>
        </label>
        <input type="file" id="profileImage" accept="image/*" autoComplete="off" {...register("avatarUrl")} />
        {errors.avatarUrl?.message && <p>{errors.avatarUrl?.message}</p>}
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="profileName" className="flex-1">
          Full Name:
        </label>
        <input type="text" id="profileName" disabled={isInputDisabled.name} autoComplete="off" {...register("name")} />
        {isInputDisabled.name ? <FiEdit2 onClick={() => handleEditClick("name")} /> : <FaCircleCheck />}
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="profileNID" className="flex-1">
          NID No:
        </label>
        <input type="text" id="profileNID" disabled={isInputDisabled.nidNo} autoComplete="off" {...register("nidNo")} />
        {isInputDisabled.nidNo ? <FiEdit2 onClick={() => handleEditClick("nidNo")} /> : <FaCircleCheck />}
        {errors.nidNo?.message && <p>{errors.nidNo?.message}</p>}
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="profilePhone" className="flex-1">
          Phone No:
        </label>
        <input
          type="tel"
          id="profilePhone"
          disabled={isInputDisabled.phoneNo}
          autoComplete="off"
          {...register("phoneNo")}
        />
        {isInputDisabled.phoneNo ? <FiEdit2 onClick={() => handleEditClick("phoneNo")} /> : <FaCircleCheck />}
        {errors.phoneNo?.message && <p>{errors.phoneNo?.message}</p>}
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="profileLocation" className="flex-1">
          Location:
        </label>
        <input
          type="text"
          id="profileLocation"
          disabled={isInputDisabled.location}
          autoComplete="off"
          {...register("location")}
        />
        {isInputDisabled.location ? <FiEdit2 onClick={() => handleEditClick("location")} /> : <FaCircleCheck />}
        {errors.location?.message && <p>{errors.location?.message}</p>}
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="profileEmail" className="flex-1">
          Email:
        </label>
        <input
          type="text"
          id="profileEmail"
          disabled={isInputDisabled.email}
          autoComplete="off"
          {...register("email")}
        />
        {isInputDisabled.email ? <FiEdit2 onClick={() => handleEditClick("email")} /> : <FaCircleCheck />}
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
    </Form>
  );
};
