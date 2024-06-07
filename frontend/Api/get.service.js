export function Get_Call(data){
    
    let promise=new Promise((resolve,reject)=>{
        fetch(data.apiUrl,).then((result)=>{
           return result.json()
        })
        .then((resData)=>{
            resolve(resData)
        }).catch((err)=>{
            reject(err)
        })
    })
    return promise
}