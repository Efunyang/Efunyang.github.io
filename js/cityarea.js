function cityarea_search_003(){
    var temp='中正區';
    i = window.document.form3.city_zip6.selectedIndex;
    window.document.form3.cityarea_zip6.length = cityarea_account[i] - cityarea_account[i-1] + 1;

    index = cityarea_account[i-1] + 1;

    if(temp=="%"){
      window.document.form3.cityarea_zip6.options[0].selected = true;
    }

    window.document.form3.cityarea_zip6.options[0].value = '%';
    window.document.form3.cityarea_zip6.options[0].text = ' ';

    for (j = 0; j < window.document.form3.cityarea_zip6.length; j++) {

      if(j!=0){

        if(temp==cityarea[index + j-1]){
            window.document.form3.cityarea_zip6.options[j].selected = true;
        }
        window.document.form3.cityarea_zip6.options[j].value = cityarea[index + j-1];
        window.document.form3.cityarea_zip6.options[j].text = cityarea[index + j-1];
      }
    }

  }