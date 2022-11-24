//бюджет на месяц
let monthBudget;
//дата в формате YYYY-MM-DD
let formatDate;


//диалоговое окно для ввода бюджета
monthBudget = prompt("Введите число, равное Вашему месячному бюджету" , "");

alert("aaa"+monthBudget);

//диалоговое окно для ввода даты
formatDate = prompt("Введите дату в формате YYYY-MM-DD" , "");

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

let monthExpenses1, monthExpenses2;

//во сколько обойдётся money

let money1, money2;

money1 = prompt("Во сколько обойдётся?", "" );
monthExpenses1 = prompt("Введите обязательную статью расходов в этом месяце", "" );

money2 = prompt("Во сколько обойдётся?", "" );
monthExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", "" );

    //заполняем свойство  appNonbidingExpenses

    appData.appObligatoryExpenses.a1 = money1;

    appData.appObligatoryExpenses.a3 = money2;

    alert("бюджет на день = "+ (appData.appMonthBudget / 30));

    //console.log(appData.appObligatoryExpenses.a3);



