import { UserEntity } from "../types/types";

export const getUserById = (id: string): Promise<UserEntity> => {
  const user = {
    id: id,
    avatarUrl: "/user.jpg",
    name: "User Full Name",
    phoneNo: "User Phone No",
    nidNo: "User National ID No",
    location: "Uttar Baghbari, Madina Market, Sylhet Sadar, Sylhet",
    email: "user@example.com",
    passwordHash: "########",
  };

  return Promise.resolve(user);
};
