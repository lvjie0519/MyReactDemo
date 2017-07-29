/**
 * Created by Administrator on 2017/7/28 0028.
 */

class Subject{

    constructor(){
        this.keys = [];
    }

    publish(){
        if(this.keys["weibo"] == 1){
            new weibo();
        }
        if(this.keys["forum"] == 1){
            new forum();
        }
    }

    subscribe(key){
        this.keys[key] = 1;
        return this;
    }

    unSubscribe(key){
        this.keys[key] = 0;
        return this;
    }

}
