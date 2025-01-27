        function addTask() {
            var taskText = document.getElementById('taskInput').value;
            if (taskText === "") {
                alert("Tehtävä ei voi olla tyhjä!");
                return;
            }
            
            var li = document.createElement('li');
            li.textContent = taskText;
            
            var removeButton = document.createElement('button');
            removeButton.textContent = "Poista";
            removeButton.onclick = function() {
                this.parentElement.remove();
            };
            
            li.appendChild(removeButton);
            document.getElementById('todoList').appendChild(li);
            
            document.getElementById('taskInput').value = "";
        }
