
var posts = [
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
];

function sortByDate(posts) {
  return posts.sort((a, b) =>
    a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1
  );
}

function getPosts(skip, top, filterConfig) {
  var result = posts;
  var from = skip || 0;
  var number = top || 10;

  if (filterConfig) {
    if (filterConfig.author) {
      result = result.filter(function(element) {
        if (element.author.includes(filterConfig.author)) return element.author;
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
        if (filterConfig.hashTags.every(tag => element.hashTags.includes(tag)))
          return element.hashTags;
      });
    }
  }
  result = sortByDate(result);
  return result.slice(from, from + number);
}

function getPost(id) {
  return posts.find(x => x.id === id);
}

function validatePost(post) {
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

function addPost(post) {
  if (
    !validatePost(post) ||
    posts.find(x => x.id === post.id)
  ) {
    return false;
  }
  posts.push(post);
  return true;
}

function removePost(id) {
  if (posts.findIndex(post => post.id === id) !== -1) {
    posts.splice(
      posts.findIndex(post => post.id === id),
      1
    );
    return true;
  }
  return false;
}

function editPost(id, post) {
  if (!validatePost(post)) {
    return false;
  }

  var newPost = getPost(id);

  if (post.description) {
    newPost.description = post.description;
  }
  if (post.photoLink) {
    newPost.photoLink = post.photoLink;
  }
  if (post.hashtags) {
    newPost.hashtags = post.hashtags;
  }
  if (validatePost(newPost)) {
    return true;
  }
  return false;
}

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
var testST2 = {
  id: "22",
  description: "в общем",
  createdAt: new Date(),
  author: "Петр",
  photoLink:
    "https://img3.goodfon.ru/original/960x854/c/1e/tumannost-kosmos-zvezdy.jpg",
  likes: ["Соболевский", "Петровский", "Медсестра"]
};

var testST3 = {
  description: "Южнокорейские военные сообщили о запуске ракеты КНДР",
  createdAt: new Date(),
  author: "Брат Ким",
  hashTags: ["КНДР", "Корея", "политика"],
  photoLink:
    "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
  likes: ["Соболевский", "Петровский", "Медсестра"]
};

var testST4 = {
  id: "23",
  description: "Южнокорейские военные сообщили о запуске ракеты КНДР",
  createdAt: new Date(),
  author: "Брат Ким",
  hashTags: ["КНДР", "Корея", "политика"],
  photoLink:
    "https://stellanews.ru/wp-content/uploads/2019/07/efbed271dac3bf418934c5f318996c0e.jpg",
  likes: ["Соболевский", "Петровский", "Медсестра"]
};

var testST5 = {
  id: "24",
  description: "Южнокорейский",
  createdAt: new Date(),
  author: "Петровский",
  hashTags: ["Минск"]
};

var testFil1 = {
  author: "Полина"
};
var testFil2 = {
  dateFrom: new Date(2020, 2, 20),
  dateTo: new Date(2020, 3, 20)
};
var testFil3 = {
  author: "Петровский",
  hashTags: ["Минск"]
};
var testFil4 = {
  author: "Петровский",
  dateFrom: new Date(2020, 1),
  dateTo: new Date(2020, 4),
  hashTags: ["Беларусь"]
};

console.log("getPost(valid): ");
console.log(getPost("5"));
console.log("getPost(invalid): ");
console.log(getPost("1337"));

console.log("validatePost(valid): " + validatePost(getPost("2")));

console.log("addPost(valid): " + addPost(testST1));
console.log("addPost(valid): " + addPost(testST2));
console.log("addPost(valid): " + addPost(testST4));
console.log("addPost(valid): " + addPost(testST5));

console.log("posts length after addPost(): " + posts.length);
console.log("getPost(addedpost): ");
console.log(getPost("21"));
console.log(getPost("22"));
console.log(getPost("23"));
console.log(getPost("24"));

console.log("editPost(valid): " + editPost("1", testST2));
console.log(
  "editPost(valid): " + editPost("20", { description: "new description" })
);

console.log("getPost(editedpost): ");
console.log(getPost("1"));
console.log(getPost("20"));

console.log("removePost(valid): " + removePost("22"));
console.log("removePost(invalid): " + removePost("30"));

console.log("posts length after removePost(): " + posts.length);

console.log("getPosts(0, 10)(valid): ");
getPosts(0, 10).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(10, 10)(valid): ");
getPosts(10, 10).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(20, 10)(valid): ");
getPosts(20, 10).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, testFil1)(not found): ");
getPosts(0, 10, testFil1).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, testFil2)(valid): ");
getPosts(0, 10, testFil2).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, testFil3)(valid): ");
getPosts(0, 10, testFil3).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, testFil4)(valid): ");
getPosts(0, 10, testFil4).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, Автор:Анна)(valid): ");
getPosts(0, 10, { author: "Анна" }).forEach(function(element) {
  console.log(element);
});

console.log("getPosts(0, 10, Автор по подстроке:Ан)(valid): ");
getPosts(0, 10, { author: "Ан" }).forEach(function(element) {
  console.log(element);
});
