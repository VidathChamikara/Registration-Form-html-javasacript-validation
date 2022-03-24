function validateId(user) {

			var reg = /^\d{5,12}$/;
            var id = user;

            if(reg.test(id) == false) {

            return false;
           }
            else {return true;}
            }

         function validatePassword(paw) {

			var reg = /^\d{7,12}$/;
            var password = paw;

            if(reg.test(password) == false) {

            return false;
           }
            else {return true;}
            }  

          function validateName(nam) {

			var reg = /^[A-Za-z]/;
            var name = nam;
            if(reg.test(name) == false) {

            return false;
           }
            else {return true;}
            } 

           function countrySelect(country){

            if(country == "Default")
           {
            return false;
           } 
           else
           return true;
           }

          function validateEmail(mail){

          	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          	var email = mail;

          	if(reg.test(email) == false){
          		return false;
          	}
          	else
          		return true;
          }   

          function checkGender(Sex){

          	x=0;
            if(Sex[0].checked)
          {
            x++;
          }
            if(Sex[1].checked)
          {
          x++;
          }
          if(x==0)
          {
          return false;
          }
          else
         {
         return true;
         }
     }
         function checkLanguage(lang){
         	x=0;
            if(lang[0].checked)
          {
            x++;
          }
            if(lang[1].checked)
          {
          x++;
          }
          if(x==0)
          {
          return false;
          }
          else
         {
         return true;
         }

         }
            

			
		

		function validateform(){
			
			var user=form1.userid.value;
			var paw=form1.password.value;
			var nam=form1.name.value;
			var country=form1.Country.value;
			var mail=form1.email.value;
			var Sex=form1.sex;
			var lang=form1.language; 
			var a=true;
			var b=true;
			var c=true;
			var d=true;
			var e=true;
			var f=true;
			var g=true;
			var h=true;

			if ( user=="" || pwd=="" || nam=="" || country=="" || mail=="" || sex=="" || lang==""){
         alert ("there are empty fields, please fill them ");
         a=false;
         }

			if(validateId(user)==false){
				alert ("User ID field required and must be of length 5 to 12 ");
                b=false;
			}

			if(validatePassword(paw)==false){
				alert ("Password field required and must be of length 7 to 12 ");
				c=false;
			}

			if(validateName(nam)==false){
				alert ("Name field required and alphabates only");
				d=false;
			}

			if(countrySelect(country)==false){
				alert("Please select the country");
				e=false;
			}

			if(validateEmail(mail)==false){
				alert("Email field required and must be a valid email");
				f=false;
			}

			if(checkGender(Sex)==false){
				alert("Please select the Gender");
				g=false; 
			}

			if(checkLanguage(lang)==false){
				alert("Plaese select the language")
				h=false;
			}

			if (a==true && b==true && c==true && d==true && e==true && f==true && g==true && h==true){
            returnvalue=true;
             }
             return returnvalue;
	

		}	