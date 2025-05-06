function fetchData(callback){

    setInterval(() => {
        const data ={name: "john", age: 30};

        callback(null, data)
    }, 1000);
}



fetchData((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data); // After 1 second: Data: { name: "John", age: 30 }
  }
});

console.log('this run immediaely!');