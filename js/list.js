export class TodoList{
    constructor(listname){
        if(listname){
            this.listname = listname;
        }
        else{
            this.listname = "Default list name";
        }
        this.container = null;
    }
    createList(body){
        
        this.container= document.createElement('div');
        this.container.className= 'kontejner';
        body.appendChild(this.container);

        const heder = document.createElement('h1');
        heder.innerHTML = this.listname;
        this.container.appendChild(heder);
    }
}