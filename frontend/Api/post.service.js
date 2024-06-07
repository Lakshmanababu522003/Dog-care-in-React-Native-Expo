export function Post_call(data){
    let promise=new Promise((resolve,reject)=>{
        
       
        console.log(data.requestBody)
        fetch(data.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.requestBody),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(async resData => {
                resolve(resData)
                console.log('Data:', resData);
                
                
            })
            .catch(error => {
                reject(error)
                console.error('Error:', error);
            });
    })

    return promise
}