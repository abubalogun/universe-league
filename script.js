function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function getContestants() {
  const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  const contestants = [];
  
  // Skip the header row (i = 1)
  for (let i = 1; i < data.length; i++) {
    contestants.push({
      name: data[i][0],
      age: data[i][1],
      year: data[i][2],
      nationality: data[i][3],
      photo: `images/${data[i][4]}`, // Assuming images are in the 'images' folder
      team: data[i][5]
    });
  }
  
  return contestants;
}

