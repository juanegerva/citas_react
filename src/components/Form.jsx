import { useState, useEffect } from "react"
import Error from "./Error";

const Form = ({setPacientes, pacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintoma, setSintoma] = useState("");

  const[error, setError] = useState(false)

  const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)

      return random + fecha
  }

  useEffect(() => {
    if ( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintoma(paciente.sintoma);
    }
    
  }, [paciente]);
  


  const handleSubmit = (e) => {
    e.preventDefault()
    //Validacion formulario

    if([nombre, propietario, email, alta, sintoma].includes("")) {
      console.log("hay al menos un campo vacio")

      setError(true)
      return
    } 

    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintoma,
    };

    if(paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else {
      // Nuevo Registro

      //uso spred operator para traer el valor de paciente que tengo y le agrego el nuevo
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }
    
   
    
    // Reiniciar Formulario
   
    setNombre("")
    setPropietario("")
    setEmail("")
    setAlta("")
    setSintoma("")
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl  text-center">
        Seguimiento Pacientes
      </h2>
      <p className="mt-5 text-lg text-center mb-10">
        Agregar Paciente y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg px-5 py-10 mb-10 m-3"
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="nombrePropietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Indicar sintomas del paciente"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 hover:bg-indigo-800 cursor-pointer text-white uppercase font-bold rounded-md transition-all"
          value={paciente.alta ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}
  

export default Form
