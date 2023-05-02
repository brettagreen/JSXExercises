const Tweet = (props) => {
    return (
        <div>
            <h4>{props.username}</h4>
            <h4>{props.name}</h4>
            <h4>{props.date}</h4>
            <h3>{props.message}</h3>
        </div>
    )
}