/**
 * Find all matches of target text in current document, and highlight them.
 *
 * @param {String} target     (Optional) The text or regex to search for. 
 *                            See Body.findText() for details.
 * @param {String} background (Optional) The desired highlight color.
 *                            A default orange is provided.
 */
function highlightText() {
//  var ui = DocumentApp.getUi();
  var target = '//TODO';
  var target1 = '{';
  var target2 = '}';
  
  var background = '#FF0000';  // default color is red.
  var doc = DocumentApp.getActiveDocument();
  var bodyElement = DocumentApp.getActiveDocument().getBody();
  var searchResult = bodyElement.findText(target);
  var searchResult1 = bodyElement.findText(target1);
  var searchResult2 = bodyElement.findText(target2);

  while (searchResult !== null) {
    var thisElement = searchResult.getElement();
    var thisElementText = thisElement.asText();

    var thisElement1 = searchResult1.getElement();
    var thisElementText1 = thisElement1.asText();
    
    var thisElement2 = searchResult2.getElement();
    var thisElementText2 = thisElement2.asText();
    
    //Logger.log(url);
    thisElementText.setBackgroundColor(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(),background);
    thisElementText1.setBackgroundColor(searchResult1.getStartOffset(), searchResult1.getEndOffsetInclusive(),background);
    thisElementText2.setBackgroundColor(searchResult2.getStartOffset(), searchResult2.getEndOffsetInclusive(),background);
    
    // search for next match
    searchResult = bodyElement.findText(target, searchResult);
    searchResult1 = bodyElement.findText(target1, searchResult1);
    searchResult2 = bodyElement.findText(target2, searchResult2);
  }
}

/**
 * Create custom menu when document is opened.
 */
function onOpen() {
  DocumentApp.getUi().createMenu('My Scripts')
      .addItem('Text Highlighter', 'highlightText')

      .addToUi();
}
