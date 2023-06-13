import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <div>
      <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
        insights
      />
    </div>
  );
}

export default Search;
