import { getListCfa } from "../../api";
import { Card, SearchInput } from "../../components";
import { useQuery } from "react-query";
import "./CatalogCFA.css";

export const CatalogCFA = () => {
  const { data = [], isLoading } = useQuery("cfaList", getListCfa);

  return (
    <div className="App">
      <div className="wrap header">
        <button className="btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M5 20H35"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 10H35"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 30H35"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="title-h1">КАТАЛОГ ЦФА</h1>
        <SearchInput />
      </div>

      <div className="container">
        {!isLoading &&
          data.map(
            ({
              price,
              subject,
              date_release,
              user: { name, middelname, surname },
            }) => (
              <Card
                username={`${middelname} ${name} ${surname}`}
                price={price}
                subject={subject}
                releaseDate={date_release}
              />
            )
          )}
      </div>
    </div>
  );
};
