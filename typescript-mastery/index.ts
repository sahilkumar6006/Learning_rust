function delayedCall(fn: () => void){
    setTimeout(fn, 0);
}

delayedCall(function() {
    console.log('Hello, World!');
})