package com.chapter01;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TheaterTest {
  @Test
  public void enterTestWhenInvitationAudience() {
    // given
    Invitation invitation = new Invitation();
    Bag bag = new Bag(invitation, 0);
    Audience audience = new Audience(bag);
    TicketOffice ticketOffice = new TicketOffice(0L, new Ticket(0L));
    TicketSeller ticketSeller = new TicketSeller(ticketOffice);
    Theater theater = new Theater(ticketSeller);
    
    // when
    theater.enter(audience);
    
    // then
    assertTrue(audience.getBag().hasTicket());
  }
}
