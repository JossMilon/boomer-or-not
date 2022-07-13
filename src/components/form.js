export function Form({ setSearch, refetch }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        refetch();
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
