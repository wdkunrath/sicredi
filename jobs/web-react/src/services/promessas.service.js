export function ServicePromessa(promessa, callback) {
    setTimeout(() => {
        Promise.resolve(promessa).then((result) => {
            if (result.status === 200) {
                //retorna o resultado                
                callback(result)
            }
            else{
                callback(null)
            }
        }).catch((e)=>   callback(null))
    }, 500)
}
