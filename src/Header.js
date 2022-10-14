export function Header({changeTabSelected}){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style={{paddingLeft: '15px'}}>Identity Management System</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={ ()=> { console.log('pressed 0'); 
              changeTabSelected(0)}}>New Identity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={ ()=> { console.log('Pressed 1'); 
              changeTabSelected(1);}}>Search Identity</a>
            </li>
      
          </ul>
       
        </div>
      </nav>
    );
}