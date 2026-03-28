async function exemploAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
exemploAsyncAwait();