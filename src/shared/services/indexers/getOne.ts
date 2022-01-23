import axios from 'axios';
import environment from '../../../environment'
import { GetOneProps } from './models/indexers.model';


const getOne = (prop: GetOneProps) => {
    return axios.get(`${environment.apiUrl}${environment.resource.indexers}${prop.id}`);
}

export default getOne;