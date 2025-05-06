function fetchDataPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success) {
                const data = {name: "john", age: 30};
                resolve(data);
            }else {
                reject(new Error('failet to fethc data '))
            }
        }, 1000)
    })
}



fetchDataPromise().then(data => {
    console.log(data);
    return data.name;
}).then(name => {
    console.log(name);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("operation complete")
})

console.log('this run immedtiate')