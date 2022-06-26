import { GetServerSideProps } from "next";
import React from "react";

interface addressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface UsersProps {
  id: number;
  name: string;
  email: string;
  address: addressType;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Users = ({ users }: UsersProps | any) => {
  return (
    <div>
      {users.map((user: UsersProps) => {
        return (
          <div key={user.id}>
            <h2>
              {user.id} {user.name} {user.address.city}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};
