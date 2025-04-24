import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { StatsCard } from '../StatsCard/StatsCards'
import styles from './styles.module.scss'


export const Header: React.FC = () => { //export function Header(), poderia fazer assim, mas faremos como uma arrow function... Esse React.FC é apenas para tipar  como typescript, nao é obrigatorio, porem é bom...
    const { tasks } = useContext(TasksContext)

    const totalTasks = tasks.length
    const totalPending = tasks.reduce((total, task) => {
        if(!task.done) 
        return total +1 
        return total
    }, 0)
    const totalDone = totalTasks - totalPending


    return (
    <header className={styles.header}>
        <div className={styles.container}> 
            <div>
                <h1>MyTodo</h1>
                <span>Bem-Vindo José!</span>
            </div>
            <div>
                <StatsCard title='Total de Tarefas' value={totalTasks} />
                <StatsCard title='Tarefas Pendentes' value={totalPending}/>
                <StatsCard title='Tarefas Concluídas' value={totalDone}/>
            </div>
        </div>
    </header>
    )
}