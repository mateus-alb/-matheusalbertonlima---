pizzaListArray = [];

function getmenu()
	{    
        // Dê um nome apropriado ao id como pizzaName
        var item = document.getElementById(" pizzaName").value; 
       
       
        pizzaListArray.  push()    (item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}