package com.salenko.task2

import org.junit.Test
import static org.junit.Assert.assertEquals

/**
 * Unit test for {@link Summator}.
 */
class SummatorUnitTest {

    Summator summator = new Summator()

    @Test
    void testGetSumOnSingleNumber() {
        assertEquals(6,summator.sumNumbers(6))
    }

    @Test
    void testGetSumOnHugeNumber() {
        int num = 23456789
        int expectedNum = 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
        assertEquals(expectedNum, summator.sumNumbers(num))
    }

    @Test
    void testGetSumOnNegativeNumber() {
        int num = -23456
        int expectedNum = 2 + 3 + 4 + 5 + 6
        assertEquals(expectedNum, summator.sumNumbers(num))
    }


}
