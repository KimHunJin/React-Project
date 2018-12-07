import APIConn from "../lib/http/service_util";

export function getList() {
    return APIConn.getInstance().getArticle();
}