// 帮助函数

// 假 ajax
// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === "/user") {
                resolve({
                    id: 1,
                    name: "XiaoPan"
                });
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript 高级程序设计"
                    },
                    {
                        id: 2,
                        name: "JavaScript 语言精粹"
                    }
                ]);
            }
        }, 2000);
    });
}

export default ajax