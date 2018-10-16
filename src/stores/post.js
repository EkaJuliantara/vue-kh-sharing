export default {
	namespaced: true,
	state: {
		data: []
  },
  getters: {
		get: state => state.data
  },
  mutations: {
		add(state, payload) {
			state.data.push(payload)
		},		
  },
  actions: {
		store(context, payload) {			
			return new Promise((resolve, reject) => {
				if (payload.title && payload.desc) {
					context.commit('add', payload);
					resolve()
				} else
					reject(new Error('The payload data is empty'))
			})
		}
  }
}