//бюджет на месяц
let monthBudget;
//дата в формате YYYY-MM-DD
let formatDate;


//диалоговое окно для ввода бюджета
  monthBudget = prompt("Введите число, равное Вашему месячному бюджету" , "");
//диалоговое окно для ввода даты
  //formatDate = prompt("Введите дату в формате YYYY-MM-DD" , "");

//бюджет appMonthBudget
//время  appFormatDate
//обязательные расходы (объект) appObligatoryExpenses
//необязательные расходы (объект)  appNonbidingExpenses
//дополнительные доходы (массив) appIncome
//Свойство appSaving логическое

let appData = {  
    appMonthBudget: monthBudget,
    appObligatoryExpenses: {},
    appNonbidingExpenses: {},
    appIncome: [],
    appFormatDate: formatDate,
    saving: false
 }

//бязательная статья расходов в этом месяце monthExpenses
let monthExpenses;

//во сколько обойдётся money
let money;


do {

        monthExpenses = prompt("52 Введите обозначение для обязательной статьи расходов в этом месяце или нажмите ОТМЕНА для завершения цикла", "" );
        
        if (monthExpenses === null) {alert("55 Ввод завершён!"); break;}
     
        if (monthExpenses === "" ) {alert("57 Введите правильное обозначение для обязательной статьи расходов  "); continue;}
      
        if (monthExpenses.length > 10) {alert("59 Значение слишком длинное. Введите заново!");continue;}
 
        money =Number(prompt(66+" Затраты на обязательную статью расхордов", "" ));

        if (money === null) {alert(j+5+" Ввод завершён!"); break;}
       
        if (money === 0) {alert(j+7+1+" Введите правильное значение для затрат на обязательную статью расхордов!"); continue;}

        if (typeof(money) == NaN) {alert(j+11+1+" Значение не цифра. Введите заново!"); continue;}

        //заполняем свойство  appNonbidingExpenses
        appData.appObligatoryExpenses[monthExpenses] = money;
       // alert("1 monthExpenses="+monthExpenses+"  "+appData.appObligatoryExpenses['aa']);
         
} while (true);



   alert("Цикл ввода статей расходов завершёнзавершён!");

/*
for (let i=1; i<3; i++) {

}

let j=1;
while (j<3) {

    j++;
}
*/



   alert("бюджет на день = "+ (appData.appMonthBudget / 30));

  
    console.log(appData.appObligatoryExpenses[0]);
    console.log(appData.appObligatoryExpenses['b']);
  



