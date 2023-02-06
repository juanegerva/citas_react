

const Patient = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre,propietario,email,alta,sintoma, id} = paciente

  const handleEliminar = () => {
   const respuesta = confirm(" Deseas Eliminar este Paciente ? ")

   if(respuesta) {
      eliminarPaciente(id)
   }
  }

  return (
    <div className="m-3 bg-white shadow-xl rounded-lg px-5 py-10 mb-10">
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintoma}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800  text-white font-bold uppercase border rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800  text-white font-bold uppercase border rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient