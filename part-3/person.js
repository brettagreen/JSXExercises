const Person = (props) => {
    const voting = props.age < 18 ? <h3>you must be 18 to vote</h3> : <h3>please go vote!</h3>
    const name = (props.name.length > 6) ? props.name.slice(0,6) : props.name;
    
    return (
        <div>
            <p>Learn some information about this person:</p>
            {voting}
            <ul>
                <li>name: <b>{name}</b></li>
                <li>age: <b>{props.age}</b></li>
                <ul>hobbies:
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
        </div>
    )
}