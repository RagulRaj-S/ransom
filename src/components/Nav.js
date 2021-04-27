import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'


class Nav extends React.Component{
    

    render(){
        return(
                <div class="navbar-fixed">
                    <nav class="blue">
                    <div class="container">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo center">Ransom Notes Identifier</a>
                        <ul class="right hide-on-med-and-down">
                        </ul>
                    </div>
                    </div>
                    </nav>
                    </div>
        );
    }
}

export default Nav