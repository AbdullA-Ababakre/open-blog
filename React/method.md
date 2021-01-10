click={()=>this.deletePersonHandler(index)}
click = {this.deletePersonHandler}
changed ={(event)=>this.nameChangedHandler(event,person.id)}

click={ this.deletePersonHandler.bind(this,index)}

