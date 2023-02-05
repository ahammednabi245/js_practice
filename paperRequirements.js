function paperCalculator(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
    const perFirstBookPages = 100;
    const perSecondBookPages = 200;
    const perThirdBookPages = 300;
    
    const totalFirstBookPage = firstBookQuantity * perFirstBookPages;
    const totalSecondBookPage= secondBookQuantity * perSecondBookPages;
    const totalThirdBookPage = thirdBookQuantity * perThirdBookPages;

    // console.log(firstBookQuantity, secondBookQuantity, thirdBookQuantity);

    const totalPaper = totalFirstBookPage + totalSecondBookPage+ totalThirdBookPage;
    return totalPaper;

}

const totalPaper = paperCalculator(15, 10, 5);
console.log(' Total Paper Require:',totalPaper);















  