const isAlphaNumeric = val => {
  const regex = /^[0-9a-z]+$/i;
  
  return regex.test(val);
}

const removeStuff = str => {
  const arrStr = str.split('');
  let i = 0;
  while(i<arrStr.length)
  {
    if(isAlphaNumeric(arrStr[i]) === false)
    {
      arrStr.splice(i, 1);
    }
    else
    {
      i++;
    }
  }
  
  return arrStr;
}

const palindrome = str => {
  str = str.toUpperCase();
  str = removeStuff(str);
  
  let start = 0;
  let end = str.length - 1;
  
  while(start <= end)
  {
    if(str[start] !== str[end])
    {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

palindrome("eye");