import EXIF from "exif-js";
//判断是否需要矫正
async function isNeedFixPhoto(file) {
	let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	return new Promise(function (resolve, reject) {
		if (!isiOS) {
			resolve({ flag: false, Orientation: 1 })
			return
		}
		EXIF.getData(file, function () {
			var Orientation = EXIF.getTag(this, 'Orientation');
			if (Orientation && Orientation != 1) {
				//图片角度不正确
				resolve({ flag: true, Orientation: Orientation })
			} else {
				//不需处理直接上传
				resolve({ flag: false, Orientation: Orientation })
			}
		});
	})
}

//压缩图片
async function best4Photo(resultBase64, Orientation, num, w) {
	return new Promise(function (resolve, reject) {
		let image = new Image();
		image.src = resultBase64;
		image.onload = function () {
			// var imgWidth = this.width,
			//   imgHeight = this.height; //获取图片宽高

			var imgWidth = w,
				imgHeight = w * this.height / this.width; //获取图片宽高
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext('2d');
			canvas.width = imgWidth;
			canvas.height = imgHeight;
			if (Orientation && Orientation != 1) {
				switch (Orientation) {
					case 6:     // 旋转90度
						canvas.width = imgHeight;
						canvas.height = imgWidth;
						ctx.rotate(Math.PI / 2);
						ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
						break;
					case 3:// 旋转180度
						ctx.rotate(Math.PI);
						ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
						break;
					case 8:     // 旋转-90度
						canvas.width = imgHeight;
						canvas.height = imgWidth;
						ctx.rotate(3 * Math.PI / 2);
						ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
						break;
				}
			} else {
				ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
			}
			const result = canvas.toDataURL("image/jpeg", num);
			resolve(result)
		}
	})
}

// 定义方法
async function file2Base64(file) {
	return new Promise(function (resolve, reject) {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (ev) {
			resolve(ev.target.result);
		}
	})
}



async function repairPhoto(file,num,w){
	const result=await isNeedFixPhoto(file);
	const resultBase64=await file2Base64(file);
	const Orientation = result.Orientation;
	const numb = num || 1;
	if(result.flag){  // 处理旋转
		return await best4Photo(resultBase64,Orientation,numb,w)
	}else{            // 不处理旋转
		return await best4Photo(resultBase64,1,numb,w)
	}
}

export default {
	isNeedFixPhoto,
	best4Photo,
	file2Base64,
	repairPhoto
}
