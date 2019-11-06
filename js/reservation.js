$( document ).ready(function() {

    $('.resa input').change(multiPrice());
});

function multiPrice() {
       var mult = 0;
       // for each row:
       $('.resa').each(function () {
           // get the values from this row:
           var $val1 = $('.val1', this).val();
           var $val2 = $('.val2', this).text();
           console.log('val1 = ' + $val1);
           console.log('val2 = ' + $val2);

           var $total = ($val1) * ($val2);
           $('.total',this).text($total);
           mult += $total;
       });
       $('#grandTotal').text(mult);
}

var tab = {
	"adulte" : {
		"semaine" : 10,
		"soiree" : 12,
		"week-end": 12.50

	},
	"enfant" : {
		"semaine" : 5,
		"soiree" : 6,
		"week-end": 6
	}
}

    







