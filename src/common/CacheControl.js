class CacheControl {
    cached = {}
    fetch = (execute, params) => {
        return new Promise((resolve, reject) => {
            const key = JSON.stringify(params);
            if(this.cached[key]) {
                resolve(this.cached[key]);
            }
            else {
                execute(params).then(res => {
                    this.cached[key] = res;
                    resolve(res);
                }, err => {
                    reject(err);
                })
            }
        });

    }
}

export default CacheControl;