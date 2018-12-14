import {observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import {UserModel} from "app/model/UserModel";
import feedStore from "app/stores/FeedStore";
import userStore from "app/stores/UserStore";

class RegisterStore {
    @observable username: string;
    @observable email: string;
    @observable password: string;
    @observable errorEmail: string;
    @observable errorUser: string;

    submit() {
        const user = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        APIConn.getInstance().postRegister(user).then( res => {
            if(res.data) {
                const user = res.data.user;
                userStore.fetchUser(new UserModel(user.id, user.bio, user.email, user.image, user.token, user.username));
                feedStore.feedAuthor = user.username;
                feedStore.feedCurrentToggle = user.username;
                feedStore.username = user.username;
                feedStore.fetchArticleData();
                history.back();
            } else {

            }
        })
    }
}

const registerStore = new RegisterStore()
export default registerStore
export {RegisterStore}