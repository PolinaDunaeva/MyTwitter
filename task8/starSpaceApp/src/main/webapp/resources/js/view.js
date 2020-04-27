class View {

    userName(name) {
      let nick = document.getElementById("user");
      let nickN = document.createElement("span");
      nickN.innerHTML = ` ${name}`;
      nick.appendChild(nickN);
    }
  
    deletePost(id) {
      document.getElementById(id)?.remove();
      return true;
    }
  
  
    /*editPost(id = '',tweet) {
      const newPost = model.getPost(id);
      console.log(model.getPost("1"));
      if(tweet.description){
        newPost.description=tweet.description;
       }
       if(tweet.hashTags){
       newPost.hashTags=tweet.hashTags;
       }
       if(tweet.photoLink){
       newPost.photoLink=tweet.photoLink;
       }
        return newPost;
    //  document.getElementById(id).replaceWith();
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
  
  console.log("удаляем пост с id = 2");
  console.log(myPost.deletePost("2"));
  
  //console.log(myPost.editPost("1",{ description: "new description" }));
  