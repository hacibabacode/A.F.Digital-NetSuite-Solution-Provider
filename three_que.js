//Phase-1
function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
 }
 
 
 let items = [{oran:'0',tutar:'10',kod:'0071'},
 {oran:'1',tutar:'15',kod:'0071'},
 {oran:'8',tutar:'12',kod:'0073'},
 {oran:'18',tutar:'23',kod:'0073'},
 {oran:'18',tutar:'30',kod:'0071'},
 {oran:'1',tutar:'43',kod:'0071'}];
 
 let result = groupByKey(items, 'oran',"kod");

 console.log(result)

 // phase-2
 let arr = [{oran:'0',tutar:'10',kod:'0071'},
{oran:'1',tutar:'15',kod:'0071'},
{oran:'8',tutar:'12',kod:'0073'},
{oran:'18',tutar:'23',kod:'0073'},
{oran:'18',tutar:'30',kod:'0071'},
{oran:'1',tutar:'43',kod:'0071'}];

let helper = {};
let result1 = arr.reduce(function(r, o) {
  let key = o.oran + '-' + o.kod;
  
  if(!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].tutar += o.tutar;
    
  }

  return r;
}, []);

console.log(result1);