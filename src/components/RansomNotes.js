import React from "react";
import M from 'materialize-css';
    
export class Admin extends React.Component {
  state = {
    magazine:'',
    hint:'',
    count:0,
    words:'',
    ans:false
}
 
componentDidMount() {
 
}


handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  
  this.setState({
      ans:true
  });
  this.state.count=0;
  this.state.words='';

  console.log(this.state.ans)
  var mag = this.state.magazine
  var hin = this.state.hint
  var i;
  console.log(mag)
  console.log(hin)

  var result = mag.includes(hin)
  if(result){
    console.log("Success")
  }
  else{
    console.log("Failed")
    var check = hin.split(" ")
    console.log(check)
    for(i=0;i<check.length;i++){
      if(mag.includes(check[i])!=true){
          this.state.count++;  
          this.state.words = this.state.words.concat(check[i]+ " ");
      }
    }
  }
}


  render(){
        return(
          <div class="Admin">
          <header className="main-head">
            <ul class="sidenav" id="Admin">
              <li>
              <a class="waves-effect waves-light btn">Logout</a>
              </li>
            </ul>
          </header>
            <span>
             <p class="flow-text center-align">Add Magazines and Ransom Notes</p>
            </span>
            <div className="container"> 
            <div className="card hoverable"> 
               <div className="card-content">
               <div class="row">
                  <div class="input-field col s12">
                    <textarea id="magazine" name="magazine" class="materialize-textarea" onChange={this.handleChange} value={this.state.magazine}></textarea>
                    <label for="magazine">Magazine</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="hint" name="hint" class="materialize-textarea" onChange={this.handleChange} value={this.state.hint}></textarea>
                    <label for="hint">Hint</label>
                  </div>
                </div>
                  <div class="but">
                  <button class="btn waves-effect col s6" type="submit" name="action" onClick={this.handleSubmit}>Submit
                     <i class="material-icons right">send</i>
                 </button>
                 </div>
                 <div class="row">
                  <div class="input-field col s12">
                    {
                      (this.state.ans === true)
                    ?<textarea id="hint" name="hint" class="materialize-textarea" disabled value={this.state.count}></textarea>
                    :null}{
                    (this.state.ans === true)
                    ?<textarea id="hint" name="hint" class="materialize-textarea" disabled value={this.state.words}  style={{color:"green"}}></textarea>
                    :null
                    }
                  </div>
                </div>
               </div> 
             </div> 
         </div>
        </div>
        );
        }
      }

export default Admin;

