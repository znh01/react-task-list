import {useState, useContext} from 'react'
import {TaskContext} from './TaskContext'
export function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)


    const handleSubmit = (e) =>{
        e.preventDefault();
        createTask({
            title,
            description});
            setTitle("");
            setDescription("");
        }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input className="bg-slate-300 p-3 w-full mb-2" autoFocus value= {title}placeholder='Escribe tu tarea'
                    onChange={function(e) {setTitle(e.target.value)}}/>
                <textarea className="bg-slate-300 p-3 w-full mb-2" value ={description} placeholder='Descripcion'
                    onChange={e=> setDescription(e.target.value)}
            ></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Guardar
            </button>
        </form>
        </div>
  )}

