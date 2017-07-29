/***********************************************
 * 补充代码，用责任链模式，简单实现表单处理审批流程
 ***********************************************/

/**
 * 表单类型type可选值：1,2,3
 * type为1时，只需要直接上级(leader)处理
 * type为2时，需要直接上级->总经理(manager)处理
 * type为3时，需要直接上级->总经理->董事长(boss)处理
 * 
 **/
var Form = function(_type) {
	this.type = _type;
}

//直接上级
var Leader = function(){}
Leader.prototype.handle = function(_form){
	
}


//总经理
var Manager = function(){}
Manager.prototype.handle = function(_form){
	
}

//董事长
var Boss = function(){}
Boss.prototype.handle = function(_form){
	
}


function submitForm(_type){
	
	var form = new Form(_type);
	
	
	var leader = new Leader();
	leader.handle(form);
}


submitForm(2);