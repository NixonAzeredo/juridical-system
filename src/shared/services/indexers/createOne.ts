import axios from 'axios';
import environment from '../../../environment'
import { CreateOneProps } from './models/indexers.model';

const createOne = (props: CreateOneProps) => {
    return axios.post(`${environment.apiUrl}${environment.resource.indexers}`, {
        simbolo: props.symbol,
        nome: props.name
    });
}

export default createOne;