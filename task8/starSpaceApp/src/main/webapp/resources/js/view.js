class View {

  userName(name) {
    let nick = document.getElementById("user");
    let nickN = document.createElement("span");
    nickN.innerHTML = ` ${name}`;
    nick.appendChild(nickN);
  }

  static deletePost(id) {
    document.getElementById(id)?.remove();
    return true;
  }

/*getPost(tweet, username) {
    document.getElementById('posts').appendChild(this.createPost(tweet, username));
}

static displayPost(tweet) {
    var post = this.createPost(tweet);
    document.getElementById("posts").insertBefore(post, document.getElementById("posts"));

}

static displayAllPosts(posts) {
    posts.forEach(tweet => this.displayPost(tweet));
}

static delete(tweet){
    postCollection.removePost(tweet.id);
    document.getElementById(tweet.id).removePost();
}

static add(post) {
    if (postCollection.addPost(post)) {
        this.displayPost(post);
    }
}

static edit(tweet, newPost) {
    if (postCollection.editPost(tweet.id, newPost)) {
        document.getElementById("posts").replaceChild(this.createPost(postCollection.getPost(tweet.id)), document.getElementById(tweet.id));
    }
}*/

  createPost(tweet) {
    
    let post = document.createElement("article");
    post.setAttribute("id", tweet.id);

    let editButtonDiv = document.createElement("div");
    let deleteButtonDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    editButton.className = "buttonModifyEd";
    deleteButton.className = "buttonModifyDel";
    editButton.textContent = "Изменить";
    deleteButton.textContent = "Удалить";
    editButtonDiv.appendChild(editButton);
    deleteButtonDiv.appendChild(deleteButton);
    post.appendChild(editButtonDiv);
    post.appendChild(deleteButtonDiv);

    deleteButton.onclick = function () {
      controller.Delete(post.id);
    };

    let userNam = document.createElement("p");
    userNam.className = "name";
    let userName = document.createElement("b");
    userName.textContent = tweet.author;
    userNam.appendChild(userName);
    post.appendChild(userNam);

    let date = document.createElement("p");
    date.textContent = new Date();
    post.appendChild(date);
    let line = document.createElement("hr");
    post.appendChild(line);

    if (tweet.photoLink !== undefined) {
      let photo = document.createElement("a");
      photo.setAttribute("href", "#");
      photo.innerHTML = `<img src=${tweet.photoLink} width= "200" height= "150" alt="фото">`;
      post.appendChild(photo);
    }

    let description = document.createElement("p");
    description.textContent = tweet.description;
    post.appendChild(description);

    if (tweet.hashTags.length != 0) {
      let Tag = "";
      for (let i = 0; i < tweet.hashTags.length; i++) {
        Tag = Tag + tweet.hashTags[i] + " ";
      }
      let tags = document.createElement("p");
      tags.className = "Tags";
      tags.textContent = Tag;
      post.appendChild(tags);
    }

    if (tweet.likes.length != 0) {
      let likesNum = document.createElement("a");
      likesNum.textContent = tweet.likes.length + " ";
      post.appendChild(likesNum);
    }

    let likeButton = document.createElement("button");
    likeButton.className = "buttonStar";
    likeButton.textContent = "Stars";
    post.appendChild(likeButton);

    let page = document.getElementById("posts");
    page.appendChild(post);
    return post;
  }

}

/*var posts = [
 
];*/

myPost = new View();

console.log(myPost.userName("Полина Дунаева"));

console.log(
  myPost.createPost({
    id: "1",
    description: "Как же красиво!",
    createdAt: new Date(),
    author: "Полина Дунаева",
    photoLink:
      "http://grif.spb.ru/main/wp-content/uploads/2014/06/Nochnoe_nebo_nad_Kosta_Rika-300x199.jpg",
    hashTags: ["#звёзды", "#природа"],
    likes: [],
  })
);

console.log(
  myPost.createPost({
    id: "2",
    description: "Вышло новое видео!",
    createdAt: new Date(),
    author: "Женя Калинкин",
    hashTags: ["#youtube"],
    likes: [],
  })
);

//console.log("удаляем пост с id = 2");
//console.log(myPost.deletePost("2"));

//console.log(myPost.editPost("1",{ description: "new description" }));


/*var postCollection = new PostCollection(posts);

view.displayAllPosts(postCollection.getAll());

view.getPost(postCollection.getPost("1"));

view.delete(postCollection.getPost("1"));

view.add({
    id: '4',
    description: 'hello',
    createdAt: new Date('2020-05-28T23:00:00'),
    author: 'Полина Дунаеваа',
    photoLink: 'https://www.photo.jpg',
    hashTags: ["#звёзды"],
    likes: [],
});

view.edit(postCollection.getPost("12"), {
    id: '5',
    description: 'bye',
    createdAt: new Date('2020-05-21T23:00:00'),
    author: 'Poll',
    photoLink: 'https://www.photo.jpg',
    hashTags: ["#звёзды", "#природа"],
    likes: [],
})*/