const checkCashRegister = (price, cash, cid) => {
    const output = {
        status: null,
        change: []
    }

    const money = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let noMoney = true;

    let change = cash - price;

    cid = cid.reverse();

    for(const item of cid)
    {
        const name = item[0];
        const give = money[name];

        let total = 0;

        while(change - give >= 0 && (total + give).toFixed(2) <= item[1])
        {
            change -= give;
            total += give;

            change = change.toFixed(2);
        }

        if(total.toFixed(2) != item[1])
        {
            noMoney = false;
        }

        if(total !== 0)
        {
            output.change.push([name, total]);
        }
    }

    if(change != 0)
    {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [];
    }
    else if(noMoney)
    {
        output.status = "CLOSED";
        output.change = cid.reverse();
    }
    else
    {
        output.status = "OPEN";
    }

    return output;
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);