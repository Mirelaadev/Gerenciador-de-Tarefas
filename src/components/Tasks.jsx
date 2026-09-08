function Tasks(props) {
    return(
        <h1>
            {props.tasks.map((task) => (
                <p>{task.title}</p>
    ))}
    </h1>

    ); 
}

export default Tasks;