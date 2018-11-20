import {
    postFn
} from '../../static/js/util.js'

export const GET_CONTACTLIST = 'GET_CONTACTLIST' 



const serviceContactUs = {
    state: {
        contactList:[],
    },
    mutations: {
        commit_contactList(state, list) {
            state.contactList = list;
        },
    },
    actions: {
        [GET_CONTACTLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/contactus', '', function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_contactList', res.data.data.list);
                    }
                });
            })
        },
    }
}
export default serviceContactUs;