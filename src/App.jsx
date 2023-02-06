import { useState, useEffect } from "react"

import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"


function App() {


  
  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacienteLS = JSON.parse( localStorage.getItem("pacientes")) ?? []
      setPacientes(pacienteLS)
    }
  
    obtenerLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))  
     
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }
  
  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 md:flex">
        <Form 
          setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}

        />
        <PatientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}


export default App
