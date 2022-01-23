const environmentProd = () => {
  return {
      production: true,
      apiUrl: 'https://oliveira-rondelli-api.herokuapp.com/api',
      resource: {
        indexers: '/planogestor/indexadores/',
      }
  };
};

export default environmentProd();