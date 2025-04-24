import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  /* Exemplo da array que armazena as tarefas
    [
        { title: 'Tarefa1', done: boolean, id: number}
    ]

    */
  const { tasks, setTasks } = useContext(TasksContext);

  //Função disparada quando o usuario está adcionando uma nova tarefa
  //O eventPreventDefault, faz com que a pagina nao recarregue ao ser submetida no botao
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length <= 3) {
      //Adcione a tarefa
      alert("Não é possível adcionar uma tarefa com menos de 3 letras");
      return;
    }
    //Adicionar a tarefa
    const newTasks = [
      ...tasks, //pega todas que ja existiam e joga e coloca neste novo valor
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle(""); //Aqui limpa da label após add a tareefa
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function handleRemoveTasks(taskId: number) {
    const removeTask = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(removeTask);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefas</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>
              <button
                onClick={() => handleRemoveTasks(task.id)}
                className={styles.remove}
              >
                Remover
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
//preventdefault evita o comportamento da pagina recarregar ao dar o submit
