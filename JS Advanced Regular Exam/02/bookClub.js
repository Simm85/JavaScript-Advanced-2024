class BookClub {
      constructor(library) {
            this.library = library;
            this.books = [];
            this.members = [];
      }

      addBook(title, author) {
            if (this.books.length > 0) {
                  for (const book of this.books) {
                        const currentTitle = Object.keys(book)[0];
                        const currentAuthor = Object.values(book)[0];
                        if (title == currentTitle && author == currentAuthor) {
                              return `The book "${title}" by ${author} is already in ${this.library} library.`;
                        }
                  }
            }

            this.books.push({ [title]: author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
      }

      addMember(memberName) {
            if (this.members.includes(memberName)) {
                  return `Member ${memberName} is already a part of the book club.`;
            }

            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
      }

      assignBookToMember(memberName, bookTitle) {
            if (this.members.indexOf(memberName) == -1) {
                  throw new Error(`Member ${memberName} not found.`);
            }

            const book = this.books.find(book => Object.keys(book)[0] == bookTitle);
            if (!book) {
                  throw new Error(`Book "${bookTitle}" not found.`);
            }

            const bookIndex = this.books.find((book, i) => {
                  if (Object.keys(book)[0] == bookTitle) {
                        return i;
                  }
            });

            const filteredBook = this.books.filter(obj => obj[bookTitle]);
            const assignedBook = Object.keys(...filteredBook)[0];
            const author = Object.values(...filteredBook)[0];
            this.books.splice(bookIndex, 1);
            return `Member ${memberName} has been assigned the book "${assignedBook}" by ${author}.`;
      }

      generateReadingReport() {
            if (this.members.length === 0) {
                  return 'No members in the book club.';
            }

            if (this.books.length === 0) {
                  return 'No available books in the library.';
            }

            let report = `Available Books in ${this.library} library\n`;
            this.books.forEach((obj) => {
                  for (const key in obj) {
                        report += `"${key}" by ${obj[key]}\n`;
                  }
            });
            return report;
      }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());



