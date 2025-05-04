"use strict";
function delayedCall(fn) {
    setTimeout(fn, 0);
}
delayedCall(function () {
    console.log('Hello, World!');
});
