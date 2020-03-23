
var posts = [
  {
    id: "1",
    description:
      "Привет всем!",
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
    description:
      "Минское «Динамо»",
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
    author: "Похомчик",
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
    description:"Стройка остановлена, лагерь свернут: противостояние в Куропатах закончено",
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
    description:
      "Минское «Динамо»",
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
    description:
      "Взрыв в Гродно!",
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

var hashTags = [
  "криминал",
  "суд",
  "Минск",
  "торги",
  "экономика",
  "КХЛ",
  "хоккей",
  "спорт",
  "сельское",
  "хозяйство",
  "Беларусь",
  "минсктранс",
  "указ",
  "Беларусь",
  "Брест",
  "марш",
  "взрыв",
  "Гродно",
  "стройка",
  "протест",
  "КНДР",
  "Корея",
  "политика"
];

function getposts(skip, top, filterConfig) {
  var result = posts;
  var from = skip || 0;
  var number = top || 10;
  
  if (filterConfig) {
    if (filterConfig.author) {
      result = result.filter(function(element) {
        return element.author == filterConfig.author;
      })
    }
    if (filterConfig.dateFrom) {
      result = result.filter(function(element) {
        return element.createdAt.getTime() >= filterConfig.dateFrom.getTime();
      })
    }
    if (filterConfig.dateTo) {
      result = result.filter(function(element) {
        return element.createdAt.getTime() <= filterConfig.dateTo.getTime();
      })
    }

    if (filterConfig.hashTags && filterConfig.hashTags.length != 0) {
      result = result.filter(function(element) {
        if(typeof element.hashtags === "undefined") {
         }
        return filterConfig.hashTags.every(function(tag) {
          return element.hashTags.indexOf(tag) >= 0;
        })
      })
    }
  }
  return result.slice(from, from + number);
}

function getpost(findId) {
  return posts.filter(function(element) {
    return element.id == findId;
  })[0];
}

function validatepost(post) {
  if (!post.id) {
    return false;
  } else if ( !post.description || post.description.length == 0 || post.description.length > 200) {
    return false;
  } else if (!post.createdAt || post.createdAt.length == 0) {
    return false;
  } else if (!post.author || post.author.length == 0) {
    return false;
  }  else {
    return true;
  }
}

function addpost(post) {
  var prevSize = posts.length;
  if (!validatepost(post)) {
    return false;
  } else if (prevSize == posts.push(post)) {
    return false;
  } else {
    return true;
  }
}

function removepost(removeId) {
  var removeIndex = posts.indexOf(getpost(removeId));
  if (removeIndex != -1) {
    posts.splice(removeIndex, 1);
    return true;
  } else {
    return false;
  }
}

function editpost(editId, post) {
  var editIndex = posts.indexOf(getpost(editId));
  if (!validatepost(post) || editIndex < 0) {
    return false;
  }
  if (post.description) {
    posts[editIndex].description = post.description;
  }
  if (post.hashTags) {
    posts[editIndex].hashTags = post.hashTags;
  }
  if (post.photoLink) {
    posts[editIndex].photoLink = post.photoLink;
  }
  if (post.likes) {
    posts[editIndex].likes = post.likes;
  }
  return true;
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

console.log("getpost(valid): ");
console.log(getpost("5"));
console.log("getpost(invalid): ");
console.log(getpost("1337"));

console.log("validatepost(valid): " + validatepost(getpost("2")));
console.log("validatepost(invalid): " + validatepost(testST3));

console.log("addpost(valid): " + addpost(testST1));
console.log("addpost(valid): " + addpost(testST2));
console.log("addpost(invalid): " + addpost(testST3));
console.log("addpost(valid): " + addpost(testST4));
console.log("addpost(valid): " + addpost(testST5));

console.log("posts length after addpost(): " + posts.length);
console.log("getpost(addedpost): ");
console.log(getpost("21"));
console.log(getpost("22"));
console.log(getpost("23"));
console.log(getpost("24"));

console.log("editpost(valid): " + editpost("21", testST2));
console.log("editpost(invalid): " + editpost("250", testST2));
console.log("editpost(valid): " + editpost("1", testST2));

console.log("getpost(editedpost): ");
console.log(getpost("1"));

console.log("removepost(valid): " + removepost("22"));
console.log("removepost(invalid): " + removepost("30"));

console.log("posts length after removepost(): " + posts.length);

console.log("getposts(0, 10)(valid): ");
getposts(0, 10).forEach(function(element) {
  console.log(element);
});

console.log("getposts(10, 10)(valid): ");
getposts(10, 10).forEach(function(element) {
  console.log(element);
});

console.log("getposts(20, 10)(valid): ");
getposts(20, 10).forEach(function(element) {
  console.log(element);
});

console.log("getposts(0, 10, testFil1)(not found): ");
getposts(0, 10, testFil1).forEach(function(element) {
  console.log(element);
});

console.log("getposts(0, 10, testFil2)(valid): ");
getposts(0, 10, testFil2).forEach(function(element) {
  console.log(element);
});

console.log("getposts(0, 10, testFil3)(valid): ");
getposts(0, 10, testFil3).forEach(function(element) {
  console.log(element);
});

console.log("getposts(0, 10, testFil4)(valid): ");
getposts(0, 10, testFil4).forEach(function(element) {
  console.log(element);
});

console.log("getposts(0, 10, Автор:Медсестра)(valid): ");
getposts(0, 10, { author: "Анна" }).forEach(function(element) {
  console.log(element);
});
