
export default {
    preload(imgArr) {
        var tempArr = imgArr.map(function (i) {
            var img = document.createElement('img')
            img.src = i
            return img
        })
        return tempArr
    }
}
