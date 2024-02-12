type Props = {
  searchParams: {
    q: string;
  };
};

function Search({ searchParams: { q } }: Props) {
  return <div>{`Page Of:- ${q}`}</div>;
}

export default Search;
