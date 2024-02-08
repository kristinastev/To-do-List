export class Task{
    constructor(){
        this.container = null;
        this.counter = 0;
        this.date = null;
    }

    createInput(){

        this.container= document.createElement('div');
        this.container.className= 'task-kontejner';
        document.querySelector(".kontejner").appendChild(this.container);


        const task_input = document.createElement('input');
        task_input.setAttribute("type", "text");
        task_input.placeholder = 'Kreiraj novi task';
        this.container.appendChild(task_input);

        const btn = document.createElement('button');
        btn.textContent = 'Create';
        btn.addEventListener('click', () => {
            const taskText = task_input.value.trim();
            if (taskText !== '') {
                this.newTask(taskText);
                this.counter++;
                tasks.innerHTML = `Broj taskova: ${this.counter}`;
            }
            else{
                alert('Input polje je prazno!');
            }
        });
        this.container.appendChild(btn);

        const tasks = document.createElement('p');
        tasks.className = 'tasks';
        tasks.innerHTML = `Broj taskova: ${this.counter}`;
        document.querySelector(".kontejner").appendChild(tasks)

    }
    newTask(txt){
        const task = document.createElement('div');
        task.className = 'task';
        document.querySelector(".kontejner").appendChild(task);

        const text = document.createElement('p');
        text.innerHTML = txt;
        task.appendChild(text);

        const options = document.createElement('div');
        options.className = 'task-options';
        document.querySelector(".kontejner").appendChild(options);

        const color = document.createElement('input');
        color.setAttribute("type", "color");
        color.className = 'color';
        options.appendChild(color);
        color.addEventListener('change', () => {
            task.style.backgroundColor = color.value;
        });

        const dlt = document.createElement('button');
        dlt.textContent = 'Delete';
        dlt.className = 'kanta';
        dlt.addEventListener('click', () => {
            this.counter--;
            document.querySelector(".tasks").innerHTML = `Broj taskova: ${this.counter}`;
            task.remove();
            options.remove();
        });
        options.appendChild(dlt);
    }
}