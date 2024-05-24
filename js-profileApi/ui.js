class UI{
    constructor() {
        this.profilContainer=
        document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');

    }

    showProfile(profile){
        this.profilContainer.innerHTML =`

            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                    <a href="#"><img src="img/kedi1.jpg" class="img-thumbnail" /></a>
                    </div>
                <div class="col-md-9">
                    <h4>contact</h>
                    <ul class="list-group">
                        <li class="list-group-item">
                            name:   ${profile.name}
                        </li>
                        <li class="list-group-item">
                            username: ${profile.username}
                        </li>
                        <li class="list-group-item">
                            email: ${profile.email}
                        </li>
                        <li class="list-group-item">
                            address: ${profile.address.street}
                        </li>
                        <li class="list-group-item">
                            phone: ${profile.phone}
                        </li>
                        
                    </ul
                    <h4> Todo List</h4>
                    <ul id="todo" class="list-group">

                    </ul>
                </div>
                </div>

            </div>
        
        `

    }
    showAlert(text){
        this.alert.innerHTML =`${text} is not find`;
    }
    showTodo(todo){
        let html = "";
        todo.forEach(item => {
            if(item.completed){
                html+= `
                <li class="list-group-item bg-success">
                    ${item.title}
                </li>
                `
            }else{
                html+= `
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>
                `
            }
        }
        
        );

        this.profilContainer.querySelector('#todo')
        .innerHTML = html;
    }

    clear(){
        this.profilContainer.innerHTML ="";
        this.alert.innerHTML="";
    }
}