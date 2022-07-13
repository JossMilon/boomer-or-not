export function Form({ search, setSearch, refetch }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (search !== "") {
          refetch();
        }
      }}
    >
      <input
        type="text"
        placeholder="Enter someone"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <input type="submit" value="Test for Boomer" />
    </form>
  );
}
