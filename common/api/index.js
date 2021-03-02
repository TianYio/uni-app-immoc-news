import $http from './http.js'
export const GetLabel = (data) => $http({
	url: 'get_label',
	data
})
