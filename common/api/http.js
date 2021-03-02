export default async function $http(options) {
	try {
		let {
			url,
			data
		} = options
		let {
			result
		} = await uniCloud.callFunction({
			name: url,
			data
		})
		if (result.code === 200) {
			return Promise.resolve(result)
		} else {
			return Promise.reject(result)
		}
	} catch (e) {
		//TODO handle the exception
		return Promise.reject(e)
	}
}
