
function getStudents(classroom){
   let { hasTeachingAssistant, classLIst } = classroom;
   let teacher, teachingAssistant, students;
   
   if( hasTeachingAssistant ){
      [teacher, teachingAssistant, ...students] = classLIst;
   }
   else{
      [teacher, ...students] = classLIst;
   }

   return students;
}

console.log(
   getStudents({
      hasTeachingAssistant: true, 
      classLIst: ["abel", "bekele", "dawit", "syum", "selam"],
   })
);