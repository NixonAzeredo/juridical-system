function LoadingData() {
  return (
    <>
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-md flex justify-center flex-col items-center">
            <h1 className="mb-5 text-4xl font-bold">Carregando dados...</h1>
            <img
              width={300}
              src="assets/delivery_package.svg"
              alt="logo de carregamento"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingData;
