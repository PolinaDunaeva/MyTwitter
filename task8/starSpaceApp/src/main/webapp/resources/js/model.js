class Model
 {
    _posts = [];
    
    constructor(posts) {
      this._posts = posts || [];
    }
  

    getAll() {
      return this._posts;
    }

    static _sortByDate(posts) {
      return posts.sort((a, b) =>
        a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1
      );
    }
  
    getPosts(skip, top, filterConfig) {
      var result = this._posts;
      var from = skip || 0;
      var number = top || 10;
  
      if (filterConfig) {
        if (filterConfig.author) {
          result = result.filter(function(element) {
            if (element.author.includes(filterConfig.author))
              return element.author;
          });
        }
        if (filterConfig.dateFrom) {
          result = result.filter(function(element) {
            return element.createdAt >= filterConfig.dateFrom;
          });
        }
        if (filterConfig.dateTo) {
          result = result.filter(function(element) {
            return element.createdAt <= filterConfig.dateTo;
          });
        }
  
        if (filterConfig.hashTags) {
          result = result.filter(function(element) {
            if (
              filterConfig.hashTags.every(tag => element.hashTags.includes(tag))
            )
              return element.hashTags;
          });
        }
      }
      result = Model._sortByDate(result);
      return result.slice(from, from + number);
    }
  
    getPost(id) {
      return this._posts.find(x => x.id === id);
    }
  
    static validatePost(post) {
      if (post) {
        if (!post.description) return false;
  
        if (post.description) {
          if (
            post.description.length > 200 ||
            typeof post.description !== "string"
          )
            return false;
        }
  
        if (post.hashtags) {
          if (post.hashtags.some(hashtag => typeof hashtag !== "string"))
            return false;
        }
  
        if (post.photoLink) {
          if (typeof post.photoLink !== "string") return false;
        }
      }
      return true;
    }
  
    addAll(posts) {
      return posts.filter(post => !this.addPost(post));
    }
  
    addPost(post) {
      if (!Model.validatePost(post) ||
        this._posts.find(x => x.id === post.id)
      ) {
        return false;
      }
      this._posts.push(post);
      return true;
    }
  
    removePost(id) {
      if (this._posts.findIndex(post => post.id === id) !== -1) {
        this._posts.splice(
          this._posts.findIndex(post => post.id === id),
          1
        );
        return true;
      }
      return false;
    }
  
    editPost(id, post) {
      if (!Model.validatePost(post)) {
        return false;
      }
  
      var newPost = this.getPost(id);
  
      if (post.description) {
        newPost.description = post.description;
      }
      if (post.photoLink) {
        newPost.photoLink = post.photoLink;
      }
      if (post.hashtags) {
        newPost.hashtags = post.hashtags;
      }
      if (Model.validatePost(newPost)) {
        return true;
      }
      return false;
    }
  
    clear() {
      this._posts = [];
    }
}
  