import {observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import {UserModel} from "app/model/UserModel";
import feedStore from "app/stores/FeedStore";
import userStore from "app/stores/UserStore";
import {EMAIL, PASSWORD, USERNAME} from "app/constants/Error";
import {OK} from "app/constants/Code";

class RegisterStore {
    @observable username: string;
    @observable email: string;
    @observable password: string;

    @observable errorEmail: string;
    @observable errorUser: string;
    @observable errorPassword: string;

    @observable statusCode: number;

    submit() {
        const user = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        return APIConn.getInstance().postRegister(user).then( res => {
            if(res.data) {
                const user = res.data.user;
                userStore.fetchUser(new UserModel(user.id, user.bio, user.email, user.image, user.token, user.username));
                feedStore.feedAuthor = user.username;
                feedStore.feedCurrentToggle = user.username;
                feedStore.username = user.username;
                this.statusCode = OK;
                feedStore.fetchArticleData();
            }
            return res.status as number;
        }).catch(err => {
            const errors = err.response.data.errors;
            Object.keys(errors).map(key => {
                switch (key) {
                    case EMAIL : {
                        this.errorEmail = errors.errors[key];
                     break;
                    }
                    case PASSWORD : {
                        this.password = errors.errors[key];
                        break;
                    }
                    case USERNAME: {
                        this.username = errors.errors[key];
                        break;
                    }
                }
            });
            this.statusCode = err.status;
            return err.status as number;
        });
    }
}

const registerStore = new RegisterStore()
export default registerStore
export {RegisterStore}