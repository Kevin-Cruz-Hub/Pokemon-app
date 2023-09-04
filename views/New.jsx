const React = require('react')

function New(){
    return(
        <main>
            <nav>
                <a href='/pokemon'>Back</a>
            </nav>
            <h1>Add a new Pokemon</h1>
            <form action='/pokemon' method='POST'>
                Name: <input type='text' name='name' required/><br/>
                <input type='submit' value='Add Your Pokemon'/>
            </form>
        </main>
    )
}
module.exports = New;