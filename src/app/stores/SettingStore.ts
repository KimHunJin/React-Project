import {action, observable} from "mobx";
import {UserModel} from "app/model/UserModel";
import userStore from "app/stores/UserStore";
import APIConn from "../../lib/http/service_util";

class SettingStore {
    @observable userModel?: UserModel = null;
    @observable password?: string;

    @action setImages(image) {
        this.userModel.image = image;
    }

    @action setName(name) {
        this.userModel.username = name;
    }

    @action setBio(bio) {
        this.userModel.bio = bio;
    }

    @action setEmail(email) {
        this.userModel.email = email;
    }

    @action setPassword(password) {
        this.password = password;
    }

    @action fetchUser() {
        if (userStore.userModel) {
            APIConn.getInstance().getCurrentUser(true).then(res => {
                const data = res.data;
                this.userModel = new UserModel(data.id, data.bio, data.email, data.image, data.token, data.username);
            })
        }
    }

    getImage(): string {
        return this.userModel.image;
    }

    getName(): string {
        return this.userModel.username;
    }

    getBio(): string {
        return this.userModel.bio;
    }

    getEmail(): string {
        return this.userModel.email;
    }

    getPassword(): string {
        return this.password;
    }


    @action updateUser() {
        const user = this.password ?
            {
                bio: this.userModel.bio,
                email: this.userModel.email,
                image: this.userModel.image,
                username: this.userModel.username
            } :
            {
                bio: this.userModel.bio,
                email: this.userModel.email,
                image: this.userModel.image,
                username: this.userModel.username,
                password: this.password
            };

        APIConn.getInstance().putUpdateUser(user).then(res => {
            const data = res.data;
            userStore.userModel = new UserModel(data.id, data.bio, data.email, data.image, data.token, data.username);
        })
    }
}

const settingStore = new SettingStore();
export default settingStore;
export {SettingStore};