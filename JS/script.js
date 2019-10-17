
function run(max , min) 
{   
    const intNumberOfColumns = document.getElementById('numberOfColumns').value;
    if(intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfColumns < 1)
        alert('Number of columns and rows must be 1 or greater');
    else
        {
        document.write ('<style>td{border:1px solid black;}</style>');
        let arrMatrix = [[]];
        let arrNewMatrix = [[]];
        let arrElements = [];
        let intBiggest = 0;
        let intBiggestIndex;
        let intSmallest = 100000;
        let intSmallestIndex
        document.write('<table><tr><td></td>')
        for (var i = 0; i< intNumberOfColumns; i++)
        {
            arrElements [i] = Math.floor(Math.random() * (max - min + 1)) + min;
            document.write('<td>' + arrElements[i] + '</td>');
        }
        document.write('</tr>');
        for(var i = 0; i < intNumberOfColumns; i++)
        {
            arrMatrix[i] = [];
            for (var j = 0; j < intNumberOfColumns; j++)
            {
                if(j==0)
                {
                    document.write('<tr><td>' + arrElements[i] + '</td>');
                }
                arrMatrix [i][j] = arrElements[i] * arrElements [j];
                if (arrMatrix[i][j] > intBiggest)
                {
                    intBiggest = arrMatrix [i][j];
                    intBiggestIndex = i;
                }
                if(arrMatrix[i][j] < intSmallest)
                {
                    intSmallest = arrMatrix [i][j];
                    intSmallestIndex = j;
                }
                document.write('<td>' + arrMatrix[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
        arrNewMatrix = arrMatrix;
        for(var i = 0; i < intNumberOfColumns; i++)
        {           
            arrNewMatrix [intBiggestIndex][i] = arrElements[intSmallestIndex] * arrElements [i];  
              
function run(max , min) 
{   
    const intNumberOfColumns = document.getElementById('numberOfColumns').value;
    if(intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfColumns < 1)
        alert('Number of columns and rows must be 1 or greater');
    else
        {
        document.write ('<style>td{border:1px solid black;}</style>');
        let arrMatrix = [[]];
        let arrNewMatrix = [[]];
        let arrElements = [];
        let intBiggest = 0;
        let intBiggestIndex;
        let intSmallest = 100000;
        let intSmallestIndex
        document.write('<table><tr><td></td>')
        for (var i = 0; i< intNumberOfColumns; i++)
        {
            arrElements [i] = Math.floor(Math.random() * (max - min + 1)) + min;
            document.write('<td>' + arrElements[i] + '</td>');
        }
        document.write('</tr>');
        for(var i = 0; i < intNumberOfColumns; i++)
        {
            arrMatrix[i] = [];
            for (var j = 0; j < intNumberOfColumns; j++)
            {
                if(j==0)
                {
                    document.write('<tr><td>' + arrElements[i] + '</td>');
                }
                arrMatrix [i][j] = arrElements[i] * arrElements [j];
                if (arrMatrix[i][j] > intBiggest)
                {
                    intBiggest = arrMatrix [i][j];
                    intBiggestIndex = i;
                }
                if(arrMatrix[i][j] < intSmallest)
                {
                    intSmallest = arrMatrix [i][j];
                    intSmallestIndex = j;
                }
                document.write('<td>' + arrMatrix[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
        arrNewMatrix = arrMatrix;
        for(var i = 0; i < intNumberOfColumns; i++)
        {           
            arrNewMatrix [intBiggestIndex][i] = arrElements[intSmallestIndex] * arrElements [i];

       document.write('<table style = margin-top:50px;><tr><td></td>')
        for (var i = 0; i< intNumberOfColumns; i++)
        {
            document.write('<td>' + arrElements[i] + '</td>');
        }
        document.write('</tr>');
        for(var i = 0; i < intNumberOfColumns; i++)
        {
            for (var j = 0; j < intNumberOfColumns; j++)
            {
                if(j==0)
                {
                    document.write('<tr><td>' + arrElements[i] + '</td>');
                }
                document.write('<td>' + arrNewMatrix[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }
}  if(intNumberOfColumns == "" )
                {
                    alert('Please fill required fields.');
                } else if (intNumberOfColumns < 1)
                    alert('Number of columns and rows must be 1 or greater');
                else
                    {
                    document.write ('<style>td{border:1px solid black;}</style>');
                    let arrMatrix = [[]];
                    let arrNewMatrix = [[]];
                    let arrElements = [];
                    let intBiggest = 0;
                    let intBiggestIndex;
                    let intSmallest = 100000;
                    let intSmallestIndex
                    document.write('<table><tr><td></td>')
                    for (var i = 0; i< intNumberOfColumns; i++)
                    {
                        arrElements [i] = Math.floor(Math.random() * (max - min + 1)) + min;
                        document.write('<td>' + arrElements[i] + '</td>');
                    }
                    document.write('</tr>');
                    for(var i = 0; i < intNumberOfColumns; i++)
                    {
                        arrMatrix[i] = [];
                        for (var j = 0; j < intNumberOfColumns; j++)
                        {
                            if(j==0)
                            {
                                document.write('<tr><td>' + arrElements[i] + '</td>');
                            }
                            arrMatrix [i][j] = arrElements[i] * arrElements [j];
                            if (arrMatrix[i][j] > intBiggest)
                            {
                                intBiggest = arrMatrix [i][j];
                                intBiggestIndex = i;
                            }
                            if(arrMatrix[i][j] < intSmallest)
                            {
                                intSmallest = arrMatrix [i][j];
                                intSmallestIndex = j;
                            }
                            document.write('<td>' + arrMatrix[i][j] + '</td>');
                        }
                        document.write('</tr>');
                    }
                    document.write('</table>');
                    arrNewMatrix = arrMatrix;
                    for(var i = 0; i < intNumberOfColumns; i++)
                    {           
                        arrNewMatrix [intBiggestIndex][i] = arrMatrix[i][intSmallestIndex];
                    }
            
                   document.write('<table style = margin-top:50px;><tr><td></td>')
                    for (var i = 0; i< intNumberOfColumns; i++)
                    {
                        document.write('<td>' + arrElements[i] + '</td>');
                    }
                    document.write('</tr>');
                    for(var i = 0; i < intNumberOfColumns; i++)
                    {
                        for (var j = 0; j < intNumberOfColumns; j++)
                        {
                            if(j==0)
                            {
                                document.write('<tr><td>' + arrElements[i] + '</td>');
                            }
                            document.write('<td>' + arrNewMatrix[i][j] + '</td>');
                        }
                        document.write('</tr>');
                    }
                    document.write('</table>');
                }
            }
        }

       document.write('<table style = margin-top:50px;><tr><td></td>')
        for (var i = 0; i< intNumberOfColumns; i++)
        {
            document.write('<td>' + arrElements[i] + '</td>');
        }
        document.write('</tr>');
        for(var i = 0; i < intNumberOfColumns; i++)
        {
            for (var j = 0; j < intNumberOfColumns; j++)
            {
                if(j==0)
                {
                    document.write('<tr><td>' + arrElements[i] + '</td>');
                }
                document.write('<td>' + arrNewMatrix[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }
}