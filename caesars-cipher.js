const rot13 = str => {
  let decodedVal = '';
  
  for(let i=0; i<str.length; i++)
  {
    let code = str.charCodeAt(i);
    
    if(code >= 65 && code<=90)
    {
      code += 13;
      
      if(code > 90)
      {
        code = (code - 91) + 65;
      }
      
    }
    
    decodedVal += String.fromCharCode(code);
  }
  
  return decodedVal;
}

rot13("SERR PBQR PNZC");