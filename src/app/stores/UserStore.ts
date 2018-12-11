import {action, observable} from "mobx";
import {UserModel} from "app/components/LoginForm/model/UserModel";

class UserStore {
    @observable userModel?: UserModel = null;

    @action fetchUser(userModel: UserModel) {
        this.userModel = userModel
    }
}

const userStore = new UserStore()
export default userStore
export {UserStore}