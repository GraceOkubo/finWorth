var checkingaccounts = cca;
var savingsaccounts  = sva;
var moneymarketaccounts = mma;
var savingsbonds = svb;
var CDs = cds;
var cashvaluelifeinsurance = cvi;

function totalCash(cca, sva, mma, svb, cds, cvi){
    return parseInt(cca) + parseInt(sva) + parseInt(mma) + parseInt(svb) + parseInt(cds) + parseInt(cvi);
}