import {action, observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import userStore from "app/stores/UserStore";


class ProfileStore {
    @observable username;
    @observable image;
    @observable bio;
    @observable following;

    @action getProfile(username) {
        APIConn.getInstance().getProfile(username).then(res => {
            this.profileSetting(res.data.profile);
        });
    }

    @action follow(username) {
        if(userStore.userModel){
            APIConn.getInstance().postAddFollow(username).then(res => {
                this.profileSetting(res.data.profile);
            })
        }
    }

    @action unFollow(username) {
        if(userStore.userModel) {
            APIConn.getInstance().deleteFollow(username).then(res => {
                this.profileSetting(res.data.profile);
            })
        }
    }

    @action profileSetting(data) {
        this.username = data.username;
        this.image = data.image;
        this.bio = data.bio;
        this.following = data.following;

        console.log('user ',this.username, ' image ', this.image, ' bio ', this.bio , ' following ' , this.following);
    }
}


const profileStore = new ProfileStore();
export default profileStore;
export {ProfileStore};