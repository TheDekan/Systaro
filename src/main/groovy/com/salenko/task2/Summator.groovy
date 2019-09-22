package com.salenko.task2

/**
 * Class for common number operations.
 */
class Summator {

    /**
     * Sums numerals of number.
     * @param inputNumber the number to sum.
     * @return sum of numerals for input number.
     */
    int sumNumbers(int inputNumber) {
        def sum = 0
        inputNumber = Math.abs(inputNumber)
        while (inputNumber > 0) {
            sum += inputNumber % 10
            inputNumber = (int) Math.floor( inputNumber / 10 )
        }
        sum
    }
}
