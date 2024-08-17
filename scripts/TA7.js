const getTitles = (books) => {
    newArray = books.map((book) => book.title);
    console.log(newArray);
    return newArray;
};

const books = [ 
    { 
        title: 'Book', 
        author: 'Name' 
    }, 
    { 
        title: 'Book2', 
        author: 'Name2' 
    },
    { 
        title: 'Book3', 
        author: 'Name3' 
    },
    { 
        title: 'Book4', 
        author: 'Name4' 
    },
    { 
        title: 'Book5', 
        author: 'Name5' 
    } 
]

getTitles(books);
