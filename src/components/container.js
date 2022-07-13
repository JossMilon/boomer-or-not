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
  const [result, setResult] = useState({
    src: "https://images.rtl.fr/~c/1155v769/rtl/www/1219713-emmanuel-macron-s-exprimait-ce-lundi-14-septembre-devant-une-centaine-d-entrepreneurs-et-entrepreneuses-de-la-french-tech.jpg",
    name: "Emmanuel Macron",
    birthYear: 1977,
    gen: "Gen X",
  });
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
      setResult(data);
    },
    { enabled: false }
  );
  console.log(query);
  return (
    <>
      <Form setSearch={setSearch} refetch={query.refetch} />
      <Result
        result={result}
        isFetching={query.isFetching}
        isError={query.isError}
      />
    </>
  );
}
