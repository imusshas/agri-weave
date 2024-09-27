import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
  onSearch: (search: string) => void;
}

type SearchType = {
  search: string;
};

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm<SearchType>();

  const onSubmit: SubmitHandler<SearchType> = (data) => {
    onSearch(data.search);
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex search" >
      <input type="text" id="search" placeholder="Search Product ..." autoComplete="off" {...register("search")} />
      <IoSearchOutline
        onClick={() => {
          handleSubmit(onSubmit);
        }}
        className="search-icon"
      />
    </form>
  );
};
