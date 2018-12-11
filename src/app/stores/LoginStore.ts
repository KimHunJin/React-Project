import {observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import userStore from "app/stores/UserStore";
import {UserModel} from "app/components/LoginForm/model/UserModel";

class LoginStore {
    @observable email
    @observable password

    submit() {

        const user = {
            email: this.email,
            password: this.password
        }

        APIConn.getInstance().postLogin(user).then(res => {
                const user = res.data.user;
                userStore.fetchUser(new UserModel(user.id, user.bio, user.email, user.image, user.token, user.username))
            }
        )
    }
}


const loginStore = new LoginStore();
export default loginStore
export {LoginStore}