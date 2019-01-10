export function formatDate (date) {
    var tt = new Date(date)
    var date= new Date(Date.parse(tt));
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var time = y+'-'+m+'-'+d;
    return time;
};