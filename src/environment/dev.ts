const environmentDev = () => {
    return {
        production: false,
        apiUrl: 'https://oliveira-rondelli-api.herokuapp.com/api',
        resource: {
          indexers: '/planogestor/indexadores/',
        }
    };
};

export default environmentDev();