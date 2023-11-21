import $$ from 'dom7';
var global_storage_user = "pdb_app_user"
var global_storage_datatemp = "pdb_app_datatemp"
var global_storage_id = "pdb_app_id"
var global_storage_id_detail = "pdb_app_id_detail"
var global_storage_page = "pdb_app_page"
var global_storage_id_atm = "pdb_app_id_atm"
var global_storage_id_merk = "pdb_app_id_merk"
var global_storage_id_ticket = "pdb_app_id_ticket"
var global_storage_data_consume = "pdb_app_data_consume"
var global_spare_part = "data_spare_part"
var global_costing = "data_costing"
var global_picture = "data_picture"
var global_jobcard = "data_jobcard"
var global_datasave = "data_datasave"
var global_job_type = "data_job_type"

var db_table = [];

// db_table.push(['tbl_info', 'db_info_job']);
// db_table.push(['tbl_new', 'db_new_job']);
// db_table.push(['tbl_accept', 'db_accepted_job']);

db_table.push({id: 'tbl_info', tbl: 'db_info_job' }); 
db_table.push({id: 'tbl_new', tbl: 'db_new_job' }); 
db_table.push({id: 'tbl_acc', tbl: 'db_accepted_job' }); 

var new_host = "https://tickmon.ptkis.id";
var new_host2 = "https://tickmon.ptkis.id/atmserv/";

var util = {
	ip: function() {
		// var ip = "https://tickmon.ptkis.id/atmserv";
		// var ip = "https://tester.ptkis.id/atmserv-assindo";
		var ip = "http://192.168.137.1/assindo/sync";
		var ip = "http://akademi.techmindo.cloud";
		
		return ip;
	},
	db_table : function(id) {
		var result;
		for( var i = 0, len = db_table.length; i < len; i++ ) {
			if( db_table[i].id === id ) {
				result = db_table[i].tbl;
				break;
			}
		}
		
		return result;
	},
	setCurrPage: function(page) {
		console.log(page);
		localStorage.setItem(global_storage_page, page);
	},
	getCurrPage: function() {
		var data = localStorage.getItem(global_storage_page);
		if (data != null) {
			return data;
		}
		return false;
	},
	getUpload: function(api = true) {
		var ip = util.ip()+"/"; 
		return ip;
	},
	getServer: function(api = true) {
		var ip = util.ip()+"/api/";
		return ip;
	},
	getServer2: function(api = true) {
		var ip = util.ip()+"/upload/";
		return ip; 
	},
	getServer3: function(api = true) {
		var ip = util.ip()+"/";
		return ip; 
	},
	setCurrentUser: function(user) {
		localStorage.setItem(global_storage_user, JSON.stringify(user));
    },
	getCurrentUser: function() {
		var data = localStorage.getItem(global_storage_user);
		if (data != null) {
			return data;
		}
		return false;
	},
	setDataOffline: function(index, data) {
		localStorage.setItem(index, JSON.stringify(data));
	},
	getDataOffline: function() {
		var data = localStorage.getItem(global_storage_datatemp);
		if (data != null) {
			return data;
		}
		return false;
	},
	setCurrentData: function(data) {
		localStorage.setItem(global_storage_datatemp, JSON.stringify(data));
	},
	getCurrentData: function() {
		var data = localStorage.getItem(global_storage_datatemp);
		if (data != null) {
			return data;
		}
		return false;
	},
	setID: function(id) {
		localStorage.setItem(global_storage_id, JSON.stringify(id));
    },
	getID: function() {
		var data = localStorage.getItem(global_storage_id);
		if (data != null) {
			return data;
		}
		return false;
	},
	setIDdetail: function(id) {
		localStorage.setItem(global_storage_id_detail, JSON.stringify(id));
    },
	getIDdetail: function() {
		var data = localStorage.getItem(global_storage_id_detail);
		if (data != null) {
			return data;
		}
		return false;
	},
	setJobType: function(type) {
		localStorage.setItem(global_job_type, type);
    },
	getJobType: function() {
		var data = localStorage.getItem(global_job_type);
		return data;
	},
	setIDMERK: function(type) {
		localStorage.setItem(global_storage_id_merk, type);
    },
	getIDMERK: function() {
		var data = localStorage.getItem(global_storage_id_merk);
		return data;
	},
	setDataConsume: function(consume) {
		localStorage.setItem(global_storage_data_consume, JSON.stringify(consume));
    },
	getDataConsume: function() {
		var data = localStorage.getItem(global_storage_data_consume);
		if (data != null) {
			return data;
		}
		return false;
	},
	setIDATM: function(id) {
		localStorage.setItem(global_storage_id_atm, JSON.stringify(id));
    },
	getIDATM: function() {
		var data = localStorage.getItem(global_storage_id_atm);
		if (data != null) {
			return data;
		}
		return false;
	},
	setTICKET: function(id) {
		localStorage.setItem(global_storage_id_ticket, JSON.stringify(id));
    },
	getTICKET: function() {
		var data = localStorage.getItem(global_storage_id_ticket);
		if (data != null) {
			return data;
		}
		return false;
	},
	setPART: function(part) {
		localStorage.setItem(global_spare_part, JSON.stringify(part));
    },
	getPART: function() {
		var data = localStorage.getItem(global_spare_part);
		if (data != null) {
			return JSON.parse(data);
		}
		return [];
	},
	setCOSTING: function(costing) {
		localStorage.setItem(global_spare_part, JSON.stringify(costing));
    },
	getCOSTING: function() {
		var data = localStorage.getItem(global_costing);
		if (data != null) {
			return JSON.parse(data);
		}
		return [];
	},
	setPICTURE: function(pict) {
		localStorage.setItem(global_picture, JSON.stringify(pict));
    },
	getPICTURE: function() {
		var data = localStorage.getItem(global_picture);
		if (data != null) {
			return JSON.parse(data);
		}
		return [];
	},
	setJOBCARD: function(pict) {
		localStorage.setItem(global_jobcard, JSON.stringify(pict));
    },
	getJOBCARD: function() {
		var data = localStorage.getItem(global_jobcard);
		if (data != null) {
			return JSON.parse(data);
		}
		return [];
	},
	setDataSave: function(pict) {
		localStorage.setItem(global_datasave, JSON.stringify(pict));
    },
	getDataSave: function() {
		var data = localStorage.getItem(global_datasave);
		if (data != null) {
			return JSON.parse(data);
		}
		return [];
	},
	isMobile: function() {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
			console.log("MOBILE");
			return true;
		}
		
		console.log("BUKAN MOBILE");
		return false;
	}
};

export default util;