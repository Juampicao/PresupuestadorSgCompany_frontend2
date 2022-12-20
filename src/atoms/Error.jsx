const Error = ({ msg }) => {
  return (
    <div className="bg-red-500 text-white font-bold text-center p-2 px-10   mx-auto uppercase mb-3 rounded">
      <p> {msg} </p>
    </div>
  );
};

export default Error;
