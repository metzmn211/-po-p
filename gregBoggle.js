function words(x)
 

{
	switch (x)
	{
	case 1:
		var word = new Array("balte","table","hat","tab","belt","lab","eat","tea","ate","tale","bale","let","bet","teal","late","beat");
		break;		
	case 2:
		var word = new Array("atwre","water","wet","wear","tear","war","ret","rate","eat","ate","tea","awe","raw","rat","wart","art","tar");
		break;
	case 3:
		var word = new Array("dclaen","can","cane","and","clan","lane","lean","lend","land","den","dean","dance","lance","clean","deal","ale","dale","candle","clad");
		break;
	case 4:
		var word = new Array("aepinlar","air","airplane","pie","plane","plan","lane","lean","pane","ear","near","nap","nape","lair","pen","pan","ape","leap","ale","peal","nap","rap","par", "pare", "pale", "are", "rail", "ail", "pail", "nail", "air", "pair", "ran", "pin", "pine", "line", "nip", "rip", "ripe", "lip", "earn", "learn", "ire");
		break;
	case 5:
		var word = new Array("redykboa","keyboard","key","board","bored","bore","bark","dark","dork","oar","boar","ark","dare","bare","are","red","rod","road","bode","rode","ode","bread", "read", "bead", "bred", "break", "drey", "day", "boy", "broke", "rake", "bake", "ear", "dear", "bear", "dye", "dyer", "doer", "oak", "boa", "doe", "okay","dab", "bade", "ade", "drake", "bard", "yard", "year", "beak", "beard", "bad", "bed", "bay");
		break;
	case 6:
		var word = new Array("evtsaedri","advertise","side","eat","sad","sat","rat","rate","vet","advise","read","rest","vest","serve","served","aside","east","tread","dear","deer","tear","trade","starve","steer","stare","veer","seat","seed","tree");
		break;
	case 7:
		var word = new Array("rcseanbh","branches","bra","she","ran","bran","car","cab","race","ranch","share","bench","bar","char","can","crane","ban","hear","hare");
		break;
	case 8:
		var word = new Array("vradntseue","adventures","vent","dent","stun","dust","rust","vase","sure","ensure","star","vend","dare","tar","starve","trade","sad","eat veer","tear","seat","seed","sand","tree","rest");
		break;
	case 9:
		var word = new Array("wokcnalgede","acknowledge","and","land","wand","wage","ledge","led","lead","lend","leg","gown","know","now","no","lean","wean","week","wed","lack","leak","deal","deck","knew","kneel");
		break;
	case 10:
		var word = new Array("muprith","triumph","hit","hurt","pit","trim","rum","rump","tip","thump","put","rim","him","hum","hip","rut");
		break;
	}
	return word;
}

function callCount()
{
    var time = parseInt(prompt("How many seconds for the timer?"));
    var currentCountDown = countDown(time);
}

function countDown(timeRemaining)
{
    var startTime = Date.now();
    return function() 
    { return timeRemaining = ( Date.now() - startTime);
    }
}