import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ?   
      
      <>
       <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center "> Administras tus {' '}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      </>
     : <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
     <p className="text-xl mt-5 mb-10 text-center m-2"> Comienza agregando pacientes  {' '}
       <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
     </p>
     </>  
  
      
      }

    


      {pacientes.map(paciente => (
        <Pacientes
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      )
      )}


      

    </div>
  )
}

export default ListadoPacientes