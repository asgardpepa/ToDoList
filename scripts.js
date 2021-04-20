let toDoList = [];

$('#addButton').click(() =>{    
    let todo = document.getElementById('whatToDo').value;
    toDoList.push(todo);
    $('#list').append(`<li>${todo}</li>`);
});

