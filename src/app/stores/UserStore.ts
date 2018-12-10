import {observable} from "mobx";
import {UserModel} from "app/components/LoginForm/model/UserModel";

class UserStore {
    @observable userModel?: UserModel = null;
}

const userStore = new UserStore()
export default userStore
export {UserStore}