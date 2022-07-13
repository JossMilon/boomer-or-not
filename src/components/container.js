//React + Components
import { useState } from "react";
import { Form } from "./form";
import { Result } from "./result";

//Packages
import axios from "axios";
import { useQuery } from "react-query";

export function Container() {
  //Component states
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  //Component variables
  // const { isFetching, error, refetch } = useQuery(
  const query = useQuery(
    ["boomerTest"],
    async () => {
      const formData = new FormData();
      formData.append("search", search);
      const { data } = await axios.post(
        "https://boomer-or-not-back.herokuapp.com/which-gen",
        formData
      );
      console.log(data);
      setResult(data);
    },
    { enabled: false }
  );
  return (
    <>
      <Form search={search} setSearch={setSearch} refetch={query.refetch} />
      <Result
        result={result}
        isFetching={query.isFetching}
        isError={query.isError}
      />
    </>
  );
}
