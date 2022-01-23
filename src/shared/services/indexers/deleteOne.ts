import axios from 'axios';
import environment from '../../../environment'
import { DeleteOneProps } from './models/indexers.model';



const deleteOne = (prop: DeleteOneProps) => {
    return axios.delete(`${environment.apiUrl}${environment.resource.indexers}${prop.id}`);
}

export default deleteOne;