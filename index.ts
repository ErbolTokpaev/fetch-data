const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

async function getData<T>(url: string): Promise<T> {
    return fetch(url)
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<{ data: T }>
    })
    .then(data => {
        return data as T
    })
}

getData(COMMENTS_URL)
  .then(data => {
    interface IdEmail {
        id: string,
        email: string,
    };

    const typedData = data as IdEmail[];

    for (let i = 0; i < typedData.length; i += 1 ){
        console.log(`ID: ${typedData[i].id}, Email: ${typedData[i].email}`);
    }
  });
