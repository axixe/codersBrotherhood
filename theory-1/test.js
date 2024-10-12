const arr = [10, 12, 15, 21];

arr.forEach((_, index) => {
    setTimeout(function() {
        console.log(arr[index] > 13 ? `Good: ${arr[index]}` : `Bad: ${arr[index]}`);
    }, 3000);
})