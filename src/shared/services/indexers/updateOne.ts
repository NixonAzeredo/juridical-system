import axios from 'axios';
import environment from '../../../environment'
import { UpdateOneProps } from './models/indexers.model';


const updateOne = (prop: UpdateOneProps) => {
    return axios.patch(`${environment.apiUrl}${environment.resource.indexers}${prop.id}`, {
        nome: prop.name,
        simbolo: prop.symbol
    });
}

export default updateOne;