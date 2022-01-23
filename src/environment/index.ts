import dev from './dev';
import prod from './prod';

const detectEnvironment = () => {
  const currentEnvironment: string = process.env.NODE_ENV;

  if(currentEnvironment === 'development'){
    return dev;
  }else if(currentEnvironment === 'production'){
    return prod;
  }else{
    throw new Error('Environment not found');
  }
}

export default detectEnvironment();