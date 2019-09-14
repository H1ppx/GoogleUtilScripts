/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var x=0;
  var message = [1,2,3];
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0]; // First column
    var subject = 'Sending emails from a Spreadsheet';
    MailApp.sendEmail(emailAddress, subject, message[x]);
    x+=1;
  }
}
