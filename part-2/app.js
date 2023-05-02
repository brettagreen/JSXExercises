const App = () => {
    return (
        <div>
            <Tweet username="CHADDD" name="Chad" date="May 2, 2023" message="Eat your greens!"/>
            <Tweet username="peacenik" name="Angie" date="May 2, 2023" message="Make love not war!"/>
            <Tweet username="ezRider" name="Spencer" date="January 22, 2023" message="Be cool stay in school!"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root")); 