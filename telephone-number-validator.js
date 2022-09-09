const telephoneCheck = str => {
    const regExp1 = /^(1\s?)?\d{3}([-\s]?)\d{3}([-\s]?)\d{4}$/;
    const regExp2 = /^(1\s?)?\(\d{3}\)([-\s]?)\d{3}([-\s]?)\d{4}$/;

    if( regExp1.test(str) ) 
    { 
        return true;
    }
    return regExp2.test(str)? true : false;
}

telephoneCheck("555-555-5555");