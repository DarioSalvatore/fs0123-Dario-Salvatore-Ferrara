function creaTasks(){
    
    let area = document.querySelector('#testo');

    let task = document.querySelector('#container');
        if(area.value != ""){


    let nuovaTask = document.createElement('div');

    let elimina = document.createElement('button');
    elimina.style.height="10px";
    elimina.style.borderRadius="100%"
    

    elimina.addEventListener('click', () => nuovaTask.remove());
    nuovaTask.addEventListener('click', () => nuovaTask.style.textDecoration = 'line-through');

    
    nuovaTask.append(area.value)
    nuovaTask.append(elimina)
    

    task.append(nuovaTask)

    area.value = ''
    }

    

    

}