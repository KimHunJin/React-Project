import {action, observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import userStore from "app/stores/UserStore";
import {UserModel} from "app/model/UserModel/index";
import feedStore from "app/stores/FeedStore";
import {FEEDS} from "app/constants/Feed";

class LoginStore {
    @observable email;
    @observable password;

    loginSubmit(): void {

        const user = {
            email: this.email,
            password: this.password
        };

        APIConn.getInstance().postLogin(user).then(res => {
                const user = res.data.user;
                userStore.fetchUser(new UserModel(user.id, user.bio, user.email, user.image, user.token, user.username));
                feedStore.currentFeed = FEEDS.YOUR_FEED;
                feedStore.feedAuthor = user.username;
                feedStore.feedCurrentToggle = user.username;
                feedStore.username = user.username;
                feedStore.fetchArticleData();
            }
        )
    }

    @action setEmail(email) {
        this.email = email
    }

    @action setPassword(password) {
        this.password = password
    }
}


const loginStore = new LoginStore();
export default loginStore
export {LoginStore}