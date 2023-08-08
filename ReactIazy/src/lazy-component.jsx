const s = {
  style: {
    fontSize: '45px',
  },
};
const LazyComponent = () => {
  return (
    <>
      <div className="card">
        <p {...s}>Lazy Component</p>
      </div>
    </>
  );
};
export default LazyComponent;
