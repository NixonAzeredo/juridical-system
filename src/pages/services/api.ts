import {
  createOne,
  deleteOne,
  getMany,
  getOne,
  updateOne,
} from "../../shared/services/indexers";
import { CreateOneProps } from "../../shared/services/indexers/models/indexers.model";

class ApiService {
  public getOne(id: number) {
    return getOne({ id });
  }

  public getMany(props: { name?: string; symbol?: string, page?: number }) {
    return getMany(props);
  }

  public deleteOne(id: number) {
    return deleteOne({ id });
  }

  public createOne(data: CreateOneProps) {
    return createOne(data);
  }

  public updateOne(data: { name: string; symbol: string; id: number }) {
    return updateOne({ ...data });
  }
}

export default ApiService;
