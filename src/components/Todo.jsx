import { Card } from './Card';
import styles from './Todo.module.css'
export function Todo({ tasks, onDelete, isChecked, handleCheck, countTasksCompleted }) {

    console.log(tasks, 'simao');
    return (
        <div className={styles.container}>
            <div className={styles.mb24}>
                <div>
                    <span className={styles.task}>Tarefas criadas</span>
                    <span className={styles.btn}>{tasks.length}</span>
                </div>
                <div>
                    <span className={styles.complete}>Concluidas</span>
                    <span className={styles.btn}>{countTasksCompleted}</span>
                </div>
            </div>
            {tasks.length === 0 ? (
                <div className={styles.border}>

                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="56" height="56" fill="url(#pattern0_43_191)" />
                        <defs>
                            <pattern id="pattern0_43_191" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_43_191" transform="scale(0.01)" />
                            </pattern>
                            <image id="image0_43_191" width="100" height="100" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>

                    <p className={styles.subli}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>

                </div>
            ) : (
                <div>
                    {tasks.map((task) => (
                        <Card task={task} key={task} onDelete={onDelete} isChecked={isChecked} handleCheck={handleCheck} />
                    ))}
                </div>
            )
            }
        </div>
    )
}