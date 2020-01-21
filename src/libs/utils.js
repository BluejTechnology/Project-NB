
export default {
    preload(imgArr) {
        var tempArr = imgArr.map(function (i) {
            var img = document.createElement('img')
            img.src = i
            return img
        })
        return tempArr
    },
    getCookie: function (sKey) {
        return (
            decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        "(?:(?:^|.*;)\\s*" +
                        encodeURIComponent(sKey).replace(
                            /[-.+*]/g,
                            "\\$&"
                        ) +
                        "\\s*\\=\\s*([^;]*).*$)|^.*$"
                    ),
                    "$1"
                )
            ) || null
        );
    }
}
