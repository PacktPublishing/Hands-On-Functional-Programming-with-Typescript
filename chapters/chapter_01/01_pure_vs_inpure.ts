module inpure {
    function isIndexPage() { 
        return window.location.pathname === "/"; 
    }      
}

module pure {

    function isIndexPage(pathname: string) { 
        return pathname === "/"; 
    }

    function shouldReturnTrueWhenPathIsIndex(){
        let expected = true;
        let result = isIndexPage("/");
        if (expected !== result) {
            throw new Error(`Expected ${expected} to equals ${result}`);
        }
    }
    
    function shouldReturnFalseWhenPathIsNotIndex() {
        let expected = false;
        let result = isIndexPage("/someotherpage");
        if (expected !== result) {
            throw new Error(`Expected ${expected} to equals ${result}`);
        }
    }
 
}
