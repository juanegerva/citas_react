

const Error = ({mensaje}) => {
  return (
    <div className="text-red-600 uppercase font-bold text-center p-3 mb-3">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error