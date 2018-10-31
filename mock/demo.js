export default {
    // url 不支持 param、query
    url: '/demo/lists',
    mock: {
        code: 0,
        data: new Array(10).fill(1).map((item, index) => ({
            id: 10000 + index + 1,
            title: `title-${index + 1}`,
        })),
        msg: 'success'
    }
}