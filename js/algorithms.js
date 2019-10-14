
function createTotalMatrix(matrix, rowLength, columnLength, startCol) {
  
    if (!startCol) startCol = 1;

    if (startCol === rowLength) return matrix;
  
    var totalMatrix = matrix.slice();

    var limit = (rowLength * columnLength) - (rowLength - startCol) + 1;

    for (var i = startCol; i <= limit; i += rowLength) {
      
      var col = i - 1;

      var topBackCol = (i - 1) - rowLength;
      var downBackCol = (i - 1) + rowLength;
      
      if (col > startCol && matrix[topBackCol] < matrix[col]) col = topBackCol;
      
      if (col < limit && matrix[downBackCol] < matrix[col]) col = downBackCol;
      
      totalMatrix[i] = matrix[i] + matrix[col];
     
    }
    
    return createTotalMatrix(totalMatrix, rowLength, columnLength, startCol += 1);
    
  }
  
  function findMinInMatrixCol(matrix, columnLength, rowLength, col) {
    
    var min = col;
    var limit = (rowLength * columnLength) - (rowLength - col) + 1;
    
    for (var i = col + rowLength; i <= limit; i += rowLength) {
      if (matrix[i] < matrix[min]) min = i;
    }
    
    return min;
  }
  
  function findMinPath(matrix, rowLength, columnLength) {
    
    var totalMatrix = createTotalMatrix(matrix, rowLength, columnLength);
    var lastColMin = findMinInMatrixCol(totalMatrix, columnLength, rowLength, rowLength - 1)
    var path = [lastColMin];
    
    for (var col = rowLength - 2; col >= 0; col--) {

      var limit = (rowLength * columnLength) - (rowLength - col) + 1;
      
      for (var i = col; i <= limit; i += rowLength) {
        if (totalMatrix[i] + matrix[lastColMin] === totalMatrix[lastColMin]) {
          if (i >= (lastColMin - rowLength) - 1 && i <= (lastColMin + rowLength) + 1) {
            path.unshift(i);
            lastColMin = i;
          }
        }
      }
    }
    
    return path;
  }