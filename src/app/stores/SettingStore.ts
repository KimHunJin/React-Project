import {action, observable} from "mobx";
import {UserModel} from "app/model/UserModel";
import userStore from "app/stores/UserStore";
import APIConn from "../../lib/http/service_util";

class SettingStore {
    @observable image: string;
    @observable username: string;
    @observable bio:string;
    @observable email: string;
    @observable password?: string;

    @action fetchUser() {
        if (userStore.userModel) {
            APIConn.getInstance().getCurrentUser().then(res => {
                const data = res.data.user;
                console.log(data);
                this.bio = data.bio;
                this.email = data.email;
                this.username = data.username;
                this.image = data.image;
            })
        }
    }

    @action updateUser() {
        console.log(this.password);
        const user = !this.password ?
            {
                user : {
                    bio: this.bio,
                    email: this.email,
                    image: this.image,
                    username: this.username
                }
            } :
            {
                user: {
                    bio: this.bio,
                    email: this.email,
                    image: this.image,
                    username: this.username,
                    password: this.password
                }
            };

        APIConn.getInstance().putUpdateUser(user).then(res => {
            const data = res.data.user;
            console.log(data);
            userStore.userModel = new UserModel(data.id, data.bio, data.email, data.image, data.token, data.username);
        })

        this.password = null;
    }
}

const settingStore = new SettingStore();
export default settingStore;
export {SettingStore};