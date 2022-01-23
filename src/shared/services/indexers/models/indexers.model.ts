export interface Response<D> {
  statusCode: string;
  success: boolean;
  message: string;
  data: D;
  errors: any[];
};

export interface Indexer 	{
  simbolo: string;
  nome: string;
  id: number;
  dataCadastro: Date | string;
  dataAlteracao: null | Date;
}

export interface CreateOneProps {
  symbol: string;
  name: string;
}

export interface DeleteOneProps {
  id: number;
}

export interface GetOneProps {
  id: number;
}

export interface UpdateOneProps {
  id: number;
  name: string;
  symbol: string;
}

export interface GetManyResponse {
  data: Response<Indexer[]>;
}
