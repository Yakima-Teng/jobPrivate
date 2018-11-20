import {
    postFn
} from '../../static/js/util.js'

export const GET_ABOUTCONTENT = 'GET_ABOUTCONTENT' 



const serviceAboutus = {
    state: {
        content:'',
    },
    mutations: {
        commit_content(state, list) {
            state.content = list;
        },
    },
    actions: {
        [GET_ABOUTCONTENT]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/aboutus','', function(res) {
                    if (res.data.code == 200) {
                        console.log(res)
                        var content = '',
                            list = res.data.data.list;
                        for (var i = 0, len = list.length; i < len; i++) {
                            content += list[i].content
                        }
                        resolve();
                        commit('commit_content', content);
                    }
                });
            })
        },
    }
}
export default serviceAboutus;