import axios from 'axios';
import environment from '../../../environment'
import { GetManyResponse } from './models/indexers.model';

interface GetManyProps {
    name?: string;
    symbol?: string;
    page?: number;
}


const getMany = (props: GetManyProps): Promise<GetManyResponse> => {
    return axios.get<GetManyResponse, GetManyResponse>(`${environment.apiUrl}${environment.resource.indexers}`, {
        params: {
            nome: props.name,
            simbolo: props.symbol,
            page: props.page
        }
    });
}

export default getMany;