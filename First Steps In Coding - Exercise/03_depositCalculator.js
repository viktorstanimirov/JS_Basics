function depositCalculator(depositAmaunt, depositTerm, annualInterestRate) {
    let accruedInterest = depositAmaunt * (annualInterestRate / 100)
    let oneMonthInterest = accruedInterest / 12
    let totalAmaunt = depositAmaunt + (depositTerm * oneMonthInterest)
    console.log(`${totalAmaunt}`);
}
