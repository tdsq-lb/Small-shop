const BASE_URL = "http://localhost:8082"

export const myRequest = (options) =>{
	return new Promise((resolve,reject) =>{
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success:(res) =>{
				if(res.data.status !== 0){
					uni.showToast({
						icon:"none",
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail:(err) =>{
				uni.showToast({
					icon:"none",
					title:"获取数据失败"
				})
				reject(err)
			}
		})
	})
	
}