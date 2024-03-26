function getAllPosts() {
    let div = document.getElementById("div1");
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(posts => {
            div.innerHTML = "";

            posts.forEach(post => {

                let open = document.createElement("p");
                open.innerHTML = "{"
                div.appendChild(open);

                let p1 = document.createElement("p");

                p1.innerText = "\b" + post.id;

                div.appendChild(p1);

                let p2 = document.createElement("p");
                // Set the inner text of the paragraph to the post title
                p2.innerText = "\v" + post.title;
                // Append the list to the div
                div.appendChild(p2);

                let p3 = document.createElement("p");

                p3.innerText = "\v" + post.completed;

                div.appendChild(p3);

                let close = document.createElement("p")
                close.innerHTML = "}"
                div.appendChild(close);
            });

        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}


function getUserInput() {
    let updateFormDiv = document.getElementById("updateForm");
    updateFormDiv.innerHTML = "";

    let postIdInput = document.createElement('input');
    postIdInput.type = 'number';
    postIdInput.placeholder = 'Enter Post Id';
    postIdInput.id = 'postId';


    let titleLable = document.createElement('label');
    titleLable.for = 'title';
    titleLable.textContent = 'New title';
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter the Title';
    titleInput.id = 'title';

    let bodyLable = document.createElement('label');
    bodyLable.for = 'body';
    bodyLable.textContent = 'New Body:';
    let bodyInput = document.createElement('textarea');
    bodyInput.type = 'text';
    bodyInput.placeholder = 'Enter the Body Content';
    bodyInput.id = 'body';

    let submitButton = document.createElement('button');
    submitButton.textContent = 'submit';
    submitButton.onclick() = updatePost();

    updateFormDiv.appendChild(postIdInput);
    updateFormDiv.appendChild(document.createElement('br'));
    updateFormDiv.appendChild(titleLable);
    updateFormDiv.appendChild(titleInput);
    updateFormDiv.appendChild(document.createElement('br'));
    updateFormDiv.appendChild(bodyLable);
    updateFormDiv.appendChild(bodyInput);
    updateFormDiv.appendChild(document.createElement('br'));
    updateFormDiv.appendChild(submitButton);

}


function updatePost() {

    let postId = document.createElement('postId').value;
    let newTitle = document.createElement('title').value;
    let newBody = document.createElement('body').value

    let updatedData = {
        title: newTitle,
        body: newBody
    }

    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedData)

    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log('Updated Post: ', data);
        })

        .catch(error => {
            console.error('Error updating post:', error);
        })

}


