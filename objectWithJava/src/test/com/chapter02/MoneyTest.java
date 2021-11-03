package com.chapter02;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class MoneyTest {
  @Test()
  @DisplayName("amount의 값이 other보다 작을 경우 true를 리턴한다.")
  public void isLessThan() {
    // given
    Money amount = Money.wons(999);
    Money other = Money.wons(1000);
    
    // when
    boolean result = amount.isLessThan(other);
    
    // them
    assertTrue(result);
  }
  
  @Test()
  @DisplayName("amount의 값이 other보다 크거나 같을 경우 true를 리턴한다.")
  public void isGreaterThanOrEqual() {
    // given
    Money amount = Money.wons(1000);
    Money other1 = Money.wons(999);
    Money other2 = Money.wons(1000);
    
    // when
    boolean resultGreater = amount.isGreaterThanOrEqual(other1);
    boolean resultEqual = amount.isGreaterThanOrEqual(other2);
    
    // given
    assertTrue(resultGreater);
    assertTrue(resultEqual);
  }
}
