var readBooksPromise = require('./promise.js')

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
 ]

// Lanjutkan code untuk menjalankan function readBooksPromise 
// Soal 2 
function reading() {
  readBooksPromise(10000, books[0])
    .then(function (fulfillled) {
      readBooksPromise(fulfillled, books[1])
        .then(function (fulfillled) {
          readBooksPromise(fulfillled, books[2])            
        })
        .catch(function (error) {
        });
    })
    .catch(function (error) {
    });
}

reading()