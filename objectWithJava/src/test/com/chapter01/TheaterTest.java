package com.chapter01;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TheaterTest {
  @Test
  public void enterTestWhenInvitationAudience() {
    // given
    long defaultAudienceAmount = 0L;
    Invitation invitation = new Invitation();
    Bag bag = new Bag(invitation, defaultAudienceAmount);
    Audience audience = new Audience(bag);
    TicketOffice ticketOffice = new TicketOffice(0L, new Ticket(1000L));
    TicketSeller ticketSeller = new TicketSeller(ticketOffice);
    Theater theater = new Theater(ticketSeller);
    
    // when
    theater.enter(audience);
    
    // then
    assertEquals(defaultAudienceAmount, audience.getBag().getAmount());
    assertTrue(audience.getBag().hasTicket());
  }
  
  @Test
  public void enterTestWhenNotInvitationAudience() {
    // given
    long defaultAudienceAmount = 1000L;
    long ticketFee = 1000L;
    Bag bag = new Bag(defaultAudienceAmount);
    Audience audience = new Audience(bag);
    TicketOffice ticketOffice = new TicketOffice(1000L, new Ticket(ticketFee));
    TicketSeller ticketSeller = new TicketSeller(ticketOffice);
    Theater theater = new Theater(ticketSeller);
  
    // when
    theater.enter(audience);
  
    // then
    assertEquals(0, audience.getBag().getAmount());
    assertTrue(audience.getBag().hasTicket());
  }
}
