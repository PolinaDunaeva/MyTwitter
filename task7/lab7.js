class PostsList {
  _posts = [];

  constructor(newPosts) {
    this._posts = newPosts.concat();
  }

  getposts(skip, top, filterConfig) {
    var result = this._posts;
    var from = skip || 0;
    var number = top || 10;

    if (filterConfig) {
      if (filterConfig.author) {
        result = result.filter(function(element) {
          return element.author == filterConfig.author;
        });
      }
      if (filterConfig.dateFrom) {
        result = result.filter(function(element) {
          return element.createdAt.getTime() >= filterConfig.dateFrom.getTime();
        });
      }
      if (filterConfig.dateTo) {
        result = result.filter(function(element) {
          return element.createdAt.getTime() <= filterConfig.dateTo.getTime();
        });
      }

      if (filterConfig.hashTags && filterConfig.hashTags.length != 0) {
        result = result.filter(function(element) {
          if (typeof element.hashtags === "undefined") {
          }
          return filterConfig.hashTags.every(function(tag) {
            return element.hashTags.indexOf(tag) >= 0;
          });
        });
      }
    }

    return result.slice(from, from + number);
  }

  getpost(findId) {
    return this._posts.filter(function(element) {
      return element.id == findId;
    })[0];
  }

  validatepost(post) {
    if (!post.id) {
      return false;
    } else if (
      !post.description ||
      post.description.length == 0 ||
      post.description.length > 200
    ) {
      return false;
    } else if (!post.createdAt || post.createdAt.length == 0) {
      return false;
    } else if (!post.author || post.author.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  addAll(newPosts) {
    var invalidPosts = [];

    newPosts.forEach(post => {
      if (!this.add(post)) invalidPosts.push(post);
    });

    return invalidPosts;
  }

  addpost(post) {
    var prevSize = this._posts.length;
    if (!PostsList.validatepost(post)) {
      return false;
    } else if (prevSize == this._posts.push(post)) {
      return false;
    } else {
      return true;
    }
  }

  removepost(removeId) {
    var removeIndex = this._posts.indexOf(getpost(removeId));
    if (removeIndex != -1) {
      this._posts.splice(removeIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  editpost(editId, post) {
    var editIndex = this._posts.indexOf(getpost(editId));
    if (!PostsList.validatepost(post) || editIndex < 0) {
      return false;
    }
    if (post.description) {
      this._posts[editIndex].description = post.description;
    }
    if (post.hashTags) {
      this._posts[editIndex].hashTags = post.hashTags;
    }
    if (post.photoLink) {
      this._posts[editIndex].photoLink = post.photoLink;
    }
    if (post.likes) {
      this._posts[editIndex].likes = post.likes;
    }
    return true;
  }

  clear() {
    this._posts = [];
  }
}

var pl = new PostsList([
  {
    id: "1",
    description: "Привет всем!",
    createdAt: new Date(2020, 3, 6, 14, 51),
    author: "Соболевский",
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "2",
    description: "Торги",
    createdAt: new Date(2020, 2, 3, 23, 14),
    author: "Петровский",
    hashTags: ["торги", "экономика", "Беларусь"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Соболевский"]
  },
  {
    id: "3",
    description: "Минское «Динамо»",
    createdAt: new Date(2017, 2, 27, 20, 1),
    author: "Иван Иванов",
    hashTags: ["КХЛ", "хоккей", "спорт"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Врач"]
  },
  {
    id: "4",
    description:
      "Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь.",
    createdAt: new Date(2016, 11, 1, 14, 12),
    author: "Анна",
    hashTags: ["сельское", "хозяйство", "Беларусь"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Петровский"]
  },
  {
    id: "5",
    description:
      "Минтранс не будет вносить изменения в механизм сбора дорожного налога",
    createdAt: new Date(2015, 2, 27, 11, 9),
    author: "Тихонович",
    hashTags: ["минсктранс", "Беларусь"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "6",
    description:
      "МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг",
    createdAt: new Date(2017, 2, 13, 15, 27),
    author: "Сидорович",
    hashTags: ["указ", "Беларусь", "экономика"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "7",
    description: "В Бресте идут суды над участниками Марша нетунеядцев",
    createdAt: new Date(2020, 3, 5, 13, 37),
    author: "Калиновский",
    hashTags: ["Брест", "суд", "марш"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Калиновский"]
  },
  {
    id: "8",
    description: "Взрыв в Гродно",
    createdAt: new Date(2020, 3, 5, 20, 36),
    author: "Врач",
    hashTags: ["взрыв", "Гродно"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Соболевский", "Петровский", "Калиновский", "Врач"]
  },
  {
    id: "9",
    description:
      "Стройка остановлена, лагерь свернут: противостояние в Куропатах закончено",
    createdAt: new Date(2019, 3, 6, 16, 11),
    author: "Петровский",
    hashTags: ["Минск", "стройка", "протест"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "10",
    description: "Южнокорейские военные сообщили о запуске ракеты КНДР",
    createdAt: new Date(2017, 3, 6, 4, 52),
    author: "КимЧенЫн",
    hashTags: ["КНДР", "Корея", "политика"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "11",
    description:
      "Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам",
    createdAt: new Date(2017, 3, 7, 14, 51),
    author: "Соболевская",
    hashTags: ["криминал", "суд", "Минск"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "12",
    description: "На торгах 6 марта рубль окреп только к доллару.",
    createdAt: new Date(2017, 4, 3, 23, 14),
    author: "Марков",
    hashTags: ["торги", "экономика", "Беларусь"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "13",
    description: "Минское «Динамо»",
    createdAt: new Date(2016, 2, 27, 20, 51),
    author: "Иванов",
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "14",
    description:
      "Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь.",
    createdAt: new Date(2016, 11, 1, 4, 12),
    author: "Данец",
    hashTags: ["сельское", "хозяйство", "Беларусь"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "15",
    description:
      "Минтранс не будет вносить изменения в механизм сбора дорожного налога",
    createdAt: new Date(2017, 2, 17, 11, 54),
    author: "Пятницкая",
    hashTags: ["минсктранс", "Беларусь"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "16",
    description:
      "МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг",
    createdAt: new Date(2020, 2, 10, 15, 27),
    author: "Петрович",
    hashTags: ["указ", "Беларусь", "экономика"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "17",
    description: "В Бресте идут суды над участниками Марша нетунеядцев",
    createdAt: new Date(2017, 2, 5, 13, 37),
    author: "Костюшко",
    hashTags: ["Брест", "суды", "марш"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "18",
    description: "Взрыв в Гродно!",
    createdAt: new Date(2016, 11, 5, 20, 36),
    author: "Анна",
    hashTags: ["взрыв", "Гродно"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "19",
    description:
      "Стройка остановлена, лагерь свернут: противостояние в Куропатах закончено",
    createdAt: new Date(2018, 1, 6, 16, 11),
    author: "Сталинка",
    hashTags: ["Минск", "стройка", "протест"],
    photoLink:
      "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
    likes: ["Соболевский", "Петровский"]
  },
  {
    id: "20",
    description: "Южнокорейские военные сообщили о запуске ракеты КНДР",
    createdAt: new Date(2020, 3, 4, 4, 52),
    author: "Брат КимЧенЫн-а",
    hashTags: ["КНДР", "Корея", "политика"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский", "Медсестра"]
  }
]);

var testST1 = {
    id: "21",
    description: "в общем ДА",
    createdAt: new Date(),
    author: "Петр",
    hashTags: ["Беларусь", "политика"],
    photoLink:
      "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
    likes: ["Соболевский", "Петровский", "Медсестра"]
  };

console.log("getpost(valid): ");
console.log(pl.getpost("5"));
console.log("getpost(invalid): ");
console.log(pl.getpost("1337"));
console.log("getposts(0, 10)(valid): ");
pl.getposts(0, 10).forEach(function(element) {
  console.log(element);
});
console.log("getposts(10, 10)(valid): ");
pl.getposts(10, 10).forEach(function(element) {
  console.log(element);
});
console.log("validatepost(valid): " + pl.validatepost(pl.getpost("2")));
console.log("Filter author");
console.log(pl.getposts(0, 10, { author: "Анна" }));
console.log("Clear posts");
pl.clear();
console.log(pl.getposts());
