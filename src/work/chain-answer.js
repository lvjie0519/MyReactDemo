/**
 * Created by Administrator on 2017/7/29 0029.
 */

/**
 * 表单类型type可选值：1,2,3
 * type为1时，只需要直接上级(leader)处理
 * type为2时，需要直接上级->总经理(manager)处理
 * type为3时，需要直接上级->总经理->董事长(boss)处理
 *
 **/
class Handler{
    handlePro(_type, _form){
        this.handler.handlePro(_form);
    }

    setHandler(handler){
        this.handler = handler;
    }

    procForm(_form){
        // 处理表单
    }
}

//直接上级
class Leader extends Handler{
    handlePro(_type, _form){
        if(_type === 1){
            this.procForm(_form);
        }else{
            this.setHandler(new Manager());
            this.handler.handlePro(_type, _form);
        }
    }

    setHandler(handler){
        this.handler = handler;
    }

    procForm(_form){
        // 处理表单
    }
}

//总经理
class Manager extends Handler{
    handlePro(_type, _form){
        if(_type === 2){
            this.procForm(_form);
        }else{
            this.setHandler(new Boss());
            this.handler.handlePro(_type, _form);
        }
    }

    setHandler(handler){
        this.handler = handler;
    }

    procForm(_form){
        // 处理表单
    }
}

//董事长
class Boss extends Handler{
    handlePro(_type, _form){
        this.procForm(_form);
    }

    setHandler(handler){
        this.handler = handler;
    }

    procForm(_form){
        // 处理表单
    }
}

var Form = function(_type) {
    this.type = _type;
}

function submitForm(_type){

    var form = new Form(_type);


    var leader = new Leader();
    leader.handle(_type, form);

}


submitForm(2);