import axios from '~/plugins/axios';

export default {
	getMsg(params) {
		var defaultParams = {

		};
		params = Object.assign(defaultParams, params);
		console.log(params)
		return axios.jsonp('https://activity.efuntw.com/twxq_initUserInfo.shtml', {params: params});
	}
}