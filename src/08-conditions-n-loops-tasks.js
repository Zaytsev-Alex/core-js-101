/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let res = '';
  if (num % 3 === 0) {
    res += 'Fizz';
  }
  if (num % 5 === 0) {
    res += 'Buzz';
  }
  if (res.length === 0) {
    res = num;
  }
  return res;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i += 1) {
    res *= i;
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = 0;
  for (let i = n1; i <= n2; i += 1) {
    res += i;
  }
  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  for (let i = rect1.top; i < rect1.top + rect1.height; i += 1) {
    for (let j = rect1.left; j < rect1.left + rect1.width; j += 1) {
      if (
        i >= rect2.top
        && i <= rect2.top + rect2.height
        && j >= rect2.left
        && j <= rect2.left + rect2.width
      ) {
        return true;
      }
    }
  }
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const width = Math.abs(circle.center.x - point.x);
  const height = Math.abs(circle.center.y - point.y);
  return Math.hypot(width, height) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
      res = str[i];
      break;
    }
  }
  if (res.length === 0) {
    res = null;
  }
  return res;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const intervalStart = a > b ? b : a;
  const intervalEnd = a > b ? a : b;
  let res = '';
  res += isStartIncluded ? '[' : '(';
  res += `${intervalStart}, ${intervalEnd}`;
  res += isEndIncluded ? ']' : ')';
  return res;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return parseInt(String(num).split('').reverse().join(''), 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const [step1, length] = [
    [],
    String(ccn).length,
  ];
  if (length % 2 === 0) {
    for (let i = 0; i < length; i += 1) {
      if (i % 2 === 0) {
        let buff = 2 * parseInt(String(ccn)[i], 10);
        if (buff > 9) {
          buff -= 9;
        }
        step1.push(buff);
      } else {
        step1.push(parseInt(String(ccn)[i], 10));
      }
    }
  } else {
    for (let i = 0; i < length; i += 1) {
      if (i % 2 !== 0) {
        let buff = 2 * parseInt(String(ccn)[i], 10);
        if (buff > 9) {
          buff -= 9;
        }
        step1.push(buff);
      } else {
        step1.push(parseInt(String(ccn)[i], 10));
      }
    }
  }
  const sum = step1.reduce((a, b) => a + b);
  return sum % 10 === 0;
}
/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  function sum(number) {
    const numberToArray = String(number).split('');
    const arrSum = numberToArray.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    if (arrSum <= 9) {
      return arrSum;
    }
    return sum(arrSum);
  }
  const res = sum(num);
  return res;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const brackets = ['[', ']', '{', '}', '(', ')', '<', '>'];
  function deleteBrackets(string) {
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
      const pos = brackets.indexOf(string[i]);
      if (pos % 2 === 0 && string[i + 1] === brackets[pos + 1]) {
        string.splice(i, 2);
        count += 1;
      }
    }
    if (string.length === 0) {
      return true;
    }
    if (count === 0) {
      return false;
    }
    return deleteBrackets(string);
  }
  const result = deleteBrackets(str.split(''));
  return result;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let number = num;
  const result = [];
  while (number >= n) {
    const rest = number % n;
    result.push(rest);
    number = Math.floor(number / n);
  }
  result.push(number);
  return parseInt(result.reverse().join(''), 10);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let source = pathes;
  let firstSlash = true;
  pathes.forEach((e) => {
    if (e[0] !== '/') {
      firstSlash = false;
    }
  });
  function split(array) {
    for (let i = 0; i < source.length; i += 1) {
      source[i] = source[i].split('/');
    }
    return array;
  }
  function deleteDifferces(array) {
    for (let i = 0; i < array.length; i += 1) {
      array[i].splice(array[i].length - 1, 1);
    }
    return array;
  }
  function compare(array) {
    const sourceArray = array;
    for (let i = 0; i < sourceArray.length; i += 1) {
      sourceArray[i] = sourceArray[i].join('/');
    }
    let count = 0;
    for (let i = 0; i < sourceArray.length - 1; i += 1) {
      if (sourceArray[i] === sourceArray[i + 1]) {
        count += 1;
      }
    }
    return count + 1 === sourceArray.length;
  }
  source = split(source);
  while (!compare(source)) {
    deleteDifferces(split(source));
  }
  let slash = '';
  if (firstSlash) {
    slash = '/';
  }
  const result = `${source[0]}${slash}`;
  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const res = new Array(m1.length);
  for (let i = 0; i < res.length; i += 1) {
    res[i] = new Array(m2[0].length).fill(0);
  }

  for (let i = 0; i < m1.length; i += 1) {
    for (let j = 0; j < m2[0].length; j += 1) {
      for (let k = 0; k < m1[0].length; k += 1) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return res;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  let xCount = 0;
  let zeroCount = 0;
  let secondDiagXCount = 0;
  let secondDiagZeroCount = 0;
  let mainDiagXCount = 0;
  let mainDiagZeroCount = 0;
  let vertXCount = 0;
  let vertZeroCount = 0;
  for (let i = 0; i < 3; i += 1) {
    zeroCount = 0;
    xCount = 0;
    for (let j = 0; j < 3; j += 1) {
      if (i + j === 2) {
        if (position[i][j] === 'X') {
          secondDiagXCount += 1;
        } else
        if (position[i][j] === '0') {
          secondDiagZeroCount += 1;
        }
      }
      if (i === j) {
        if (position[i][j] === 'X') {
          mainDiagXCount += 1;
        } else
        if (position[i][j] === '0') {
          mainDiagZeroCount += 1;
        }
      }
      if (position[i][j] === 'X') {
        xCount += 1;
      } else
      if (position[i][j] === '0') {
        zeroCount += 1;
      }
      if (xCount === 3
        || secondDiagXCount === 3
        || mainDiagXCount === 3
      ) {
        return 'X';
      }
      if (zeroCount === 3
        || secondDiagZeroCount === 3
        || mainDiagZeroCount === 3
      ) {
        return '0';
      }
    }
  }
  for (let j = 0; j < 3; j += 1) {
    vertXCount = 0;
    vertZeroCount = 0;
    for (let i = 0; i < 3; i += 1) {
      if (position[i][j] === 'X') {
        vertXCount += 1;
      } else
      if (position[i][j] === '0') {
        vertZeroCount += 1;
      }
    }
    if (vertXCount === 3) {
      return 'X';
    }
    if (vertZeroCount === 3) {
      return '0';
    }
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
