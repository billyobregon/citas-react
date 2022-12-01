import Swal from 'sweetalert2'

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handlesEliminar = () => {
    const respuesta = Swal.fire({
      title: 'Estas seguro?',
      text: "Esta tarea no la puedes revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!'
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El paciente fue eliminado',
          'success'
        )
        eliminarPaciente(id)
      }
    })
 
  }

  return (
    <div className="mx-5 my-7 bg-white shadow-md py-10 px-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case"> {fecha} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase text-justify">Sintomas: {''}
          <span className="font-normal normal-case"> {sintomas} </span>
        </p>
      <div className="flex justify-between mt-5">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> setPaciente(paciente)}
        >
          Editar</button>

          <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handlesEliminar}
        >
          Eliminar</button>
      </div>

      </div>
  )
}

export default Pacientes