 $( function() {
    var project_AcademicOutreach = [
     'Advanced Studies in Political Economy', 'Community & Crisis', 'Freedom and Flourishing', 'Tensions in Political Economy', 'Work & Dependency', '-None-'
   ];
   
   var selection = $('#field112813780').find(":selected").text();
   
   switch( selection ){
     
     case ("Academic Outreach"):
        $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
            source: project_AcademicOutreach,
            minLength : 0
          });
         break; 
  }
   
  } );
