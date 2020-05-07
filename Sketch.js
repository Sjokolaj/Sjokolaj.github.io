function preload() {
    tableInfected = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv', 'header');
    tableDead = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv', 'header');
    tableCured = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv', 'csv', 'header');
}

// Laver en dropdown-menu som bruges til at vælge et lands data, der sætter gang i function mySelectEvent
function setup() {
    createCanvas(1920, 1080);

    textAlign(CENTER);
    background(255);
    sel = createSelect();
    sel.position(500, 200);
    for (let i=0; i < 266; i++){
      sel.option(tableInfected.getRows()[i].arr[1])
   }
    sel.changed(mySelectEvent);
}


function mySelectEvent() {
    background(255)
    let item = sel.value();

  //Infected
    CCountInfected = tableInfected.getColumnCount();
    item_Infected = tableInfected.findRows(item,               'Country/Region');
    RCInfected = item_Infected.length

    NewInfected = item_Infected[RCInfected-1].arr[CCountInfected-1];

  //Dead
    CCountDead = tableDead.getColumnCount();
    item_Dead = tableDead.findRows(item,               'Country/Region');
    RCDead = item_Dead.length

    NewDead = item_Dead[RCDead-1].arr[CCountDead-1];
  
  //Cured
    CCountCured = tableCured.getColumnCount();
    item_Cured = tableCured.findRows(item,               'Country/Region');
    RCCured = item_Cured.length

    NewCured = item_Cured[RCCured-1].arr[CCountCured-1];

    text(NewInfected, 300, 500);
    text(NewDead, 500, 500);
    text(NewCured, 700,500);

    textAlign(LEFT);
    text('You are now looking at the newest Covid-19 data from ' + item + '!', 0, 50);
    textAlign(CENTER);
    text('Currently infected', 300, 450);
    text('Dead', 500, 450);
    text('Cured/Survived', 700, 450);
}

function draw() {
    textSize(25)
}