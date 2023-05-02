const App = () => {
    return (
        <div>
            <Person name="Chad" age={27} hobbies={['skiing', 'riding', 'eliding']}/>
            <Person name="Angie" age={13} hobbies={['teen idoling', 'soccer', 'orchestra']}/>
            <Person name="Spencer" age={21} hobbies={['oudoors', 'literature', 'gardening']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root")); 