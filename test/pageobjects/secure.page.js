
class SecurePage {
     get SearchBox(){return $('#search_query_top')}
     get SearchButton(){return $('.btn btn-default button-search')} 
}

module.exports = new SecurePage();
