
/**
 * foglalások kezelése
 */
 
function progressButton(){
            
		var inputMovie = document.getElementById("movie");
		var strMovie = inputMovie.options[inputMovie.selectedIndex].text;
		
		var inputDate = document.getElementById("date");
		var strDate = inputDate.options[inputDate.selectedIndex].text;
		
		var inputTime = document.getElementById("time");
		var strTime = inputTime.options[inputTime.selectedIndex].text;

			
			
        var inputName = document.getElementById("name").value;
		var inputEmail = document.getElementById("email").value;
        
		if(strMovie!="Film neve" && strDate!="Dátum" && strTime!="Időpont" && inputName!="Teljes Név" && inputEmail!="E-mail"){
            
			localStorage.setItem("tempMovie",strMovie);
			localStorage.setItem("tempDate",strDate);
			localStorage.setItem("tempTime",strTime);
			localStorage.setItem("tempName",inputName);
			localStorage.setItem("tempEmail",inputEmail);
				
			VetitesCheck();
			document.getElementById("seatsPicture").style.display = "block";
			document.getElementById("checkboxContainer").style.display = "block";
		}
		else{
			alert("Hiba: hiányzó mezők.")
		}
}

function reserveButton(){
	FoglalasNew();
	
	lista = JSON.parse(localStorage.getItem("VetitesLista"));
	lista2 = JSON.parse(localStorage.getItem("FoglalasLista"));
	
	movie = localStorage.getItem("tempMovie");
	date = localStorage.getItem("tempDate");
	time = localStorage.getItem("tempTime");
	

	for(i=0;i<lista.length;i++){
		if(movie==(lista[i])[0] && date==(lista[i])[1] && time==(lista[i])[2]){
			reservedSeats = document.getElementsByName('chkbx');
			
			thereIsChecked=0;
			for (checkbox of reservedSeats) {  
				if (checkbox.checked){
					thereIsChecked=1;
					lista2length=lista2.length-1;
					((lista[i])[3])[checkbox.value]=1;
					((lista2[lista2length])[5])[checkbox.value]=1;
					
					
				}
			}
			if(thereIsChecked==1){
				localStorage.setItem("VetitesLista", JSON.stringify(lista));
			}
			else{
				lista2.pop();	
			}
			localStorage.setItem("FoglalasLista", JSON.stringify(lista2));
			VetitesLoad(i);
		}
	}
}
 
 
function VetitesCheck(){
	
	if(localStorage.getItem("VetitesLista")==null){
		localStorage.setItem("VetitesLista","[]");
	}
	lista = JSON.parse(localStorage.getItem("VetitesLista"));
	
	if(lista.length==0){
		VetitesNew();
	}
	else{
		movie = localStorage.getItem("tempMovie");
		date = localStorage.getItem("tempDate");
		time = localStorage.getItem("tempTime");
		
		exist=0;
		for(i=0;i<lista.length;i++){
			if(movie==(lista[i])[0] && date==(lista[i])[1] && time==(lista[i])[2]){
				j=i;
				exist=1;
			}
		}
		
		if(exist==1){
			VetitesLoad(j);
		}
		else{
			VetitesNew();
		}
		
	}

}

function VetitesLoad(match){
	
	lista = JSON.parse(localStorage.getItem("VetitesLista"));
	checklistIDs = ["seatH1","seatH2","seatH3","seatH4","seatH5","seatH6","seatG1","seatG2","seatG3","seatG4","seatG5","seatG6","seatF1","seatF2","seatF3","seatF4","seatF5","seatF6"]
	
	for(i=0;i<18;i++){
		if(((lista[match])[3])[i]==1){
			(document.getElementById(checklistIDs[i])).disabled = true;
			(document.getElementById(checklistIDs[i])).checked = false;
		}
		else{
			(document.getElementById(checklistIDs[i])).disabled = false;
		}
	}
	document.getElementById(checklistIDs[i])
	
	
}

function VetitesNew(){
	lista = JSON.parse(localStorage.getItem("VetitesLista"));
	seats = new Array(18); for(i=0; i<18; i++) seats[i] = 0;
	vetites = [localStorage.getItem("tempMovie"),localStorage.getItem("tempDate"),localStorage.getItem("tempTime"),seats]
	
	lista.push(vetites);
	localStorage.setItem("VetitesLista", JSON.stringify(lista));
	
	
}

function FoglalasNew(){
	
	if(localStorage.getItem("FoglalasLista")==null){
		localStorage.setItem("FoglalasLista","[]");
	}
	lista = JSON.parse(localStorage.getItem("FoglalasLista"));
	seats = new Array(18); for(i=0; i<18; i++) seats[i] = 0;
	foglalas = [localStorage.getItem("tempName"),localStorage.getItem("tempEmail"),localStorage.getItem("tempMovie"),localStorage.getItem("tempDate"),localStorage.getItem("tempTime"),seats]
	
	lista.push(foglalas);
	localStorage.setItem("FoglalasLista", JSON.stringify(lista));
	
}

function ListFoglalas(){
	alert("listfoglalas");
}

function ListVetites(){
	alert("listvetites");
}