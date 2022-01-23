import { useEffect, useState } from "react";
import Container from "../../shared/components/Container";
import Navbar from "../../shared/components/Navbar";
import SubPanel from "../../shared/components/SubPanel";
import Table from "../../shared/components/Table";
import { Indexer } from "../../shared/services/indexers/models/indexers.model";
import ApiService from "../services/api";

function Indexers() {
  const [indexers, setIndexers] = useState<Indexer[]>([]);
  const [loadMoreIndexers, setLoadMoreIndexers] = useState(false);
  const [page, setPage] = useState(2);

  const deleteOneIndexer = async (id: number) => {
    const apiService = new ApiService();
    await apiService.deleteOne(id);
    setIndexers(indexers.filter((indexer) => indexer.id !== id));
  };

  const loadMore = async () => {
    setLoadMoreIndexers(true);
    const apiService = new ApiService();
    console.log(page);
    const {
      data: { data },
    } = await apiService.getMany({ page });
    setIndexers([...indexers, ...data]);
    setLoadMoreIndexers(false);
    setPage((prevState) => prevState + 1);
  };

  const updateOneIndexer = async (indexer: {
    name: string;
    symbol: string;
    id: number;
  }) => {
    const apiService = new ApiService();
    await apiService.updateOne(indexer);
    const indexerCopy = [...indexers];
    const index = indexerCopy.findIndex((item) => {
      return item.id === indexer.id;
    });

    indexerCopy[index] = {
      ...indexerCopy[index],
      nome: indexer.name,
      simbolo: indexer.symbol,
    };

    return setIndexers(indexerCopy);
  };

  const getIndexersWithSearch = async (search: string) => {
    const apiService = new ApiService();
    const {
      data: { data },
    } = await apiService.getMany({
      name: search,
    });
    setIndexers(data);
  };

  const createOneIndexer = async (indexer: {
    name: string;
    symbol: string;
  }) => {
    const apiService = new ApiService();
    await apiService.createOne(indexer);
    setIndexers([
      ...indexers,
      {
        simbolo: indexer.symbol,
        nome: indexer.name,
        dataAlteracao: null,
        dataCadastro: new Date().toISOString(),
        id: indexers.length + 1,
      },
    ]);

    console.log([
      ...indexers,
      {
        simbolo: indexer.symbol,
        nome: indexer.name,
        dataAlteracao: null,
        dataCadastro: new Date().toISOString(),
        id: indexers.length + 1,
      },
    ]);
  };

  useEffect(() => {
    const apiService = new ApiService();
    const getIndexers = async () => {
      const {
        data: { data },
      } = await apiService.getMany({});
      setIndexers(data);
    };

    getIndexers();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <>
          <SubPanel
            sendCreate={createOneIndexer}
            sendSearch={getIndexersWithSearch}
            title="Indexadores"
          />
          <br />
          <Table<Indexer>
            deleteIndexer={deleteOneIndexer}
            dataTable={indexers}
            updateIndexer={updateOneIndexer}
          ></Table>
          <div className="flex justify-center mt-2">
            <button
              onClick={loadMore}
              className={`btn btn-ghost bg-blue-600 hover:bg-blue-500 ${
                loadMoreIndexers && "loading"
              }`}
            >
              <span className="text-white">Carregar mais...</span>
            </button>
          </div>
        </>
      </Container>
    </>
  );
}

export default Indexers;
