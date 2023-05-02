const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Brett" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root")); 