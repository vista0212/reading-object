import { Invitation } from '../../main/Chapter01/Invitation';
import { Bag } from '../../main/Chapter01/Bag';
import { Audience } from '../../main/Chapter01/Audience';
import { TicketOffice } from '../../main/Chapter01/TicketOffice';
import { Ticket } from '../../main/Chapter01/Ticket';
import { TicketSeller } from '../../main/Chapter01/TicketSeller';
import { Theater } from '../../main/Chapter01/Theater';

describe('Theater 클래스 테스트 코드', () => {
  it('초대받은 손님의 경우, 소지금이 차감되지 않고 티켓을 발급받을 수 있다.', () => {
    // given
    const invitation: Invitation = new Invitation();
    const bag: Bag = new Bag(0, invitation);
    const audience: Audience = new Audience(bag);
    const ticketOffice: TicketOffice = new TicketOffice(0, [new Ticket(0)]);
    const ticketSeller: TicketSeller = new TicketSeller(ticketOffice);
    const theater: Theater = new Theater(ticketSeller);

    // when
    theater.enter(audience);

    // then
    expect(audience.bag.hasTicket()).toBeTruthy();
  });

  it('초대받지 않은 손님의 경우, 원래 소지금에서 티켓값을 빼고, 티켓을 발급받을 수 있다.', () => {
    // given
    const defaultAudienceAmount = 1000;
    const ticketFee = 1000;
    const bag: Bag = new Bag(defaultAudienceAmount);
    const audience: Audience = new Audience(bag);
    const ticketOffice: TicketOffice = new TicketOffice(0, [new Ticket(ticketFee)]);
    const ticketSeller: TicketSeller = new TicketSeller(ticketOffice);
    const theater: Theater = new Theater(ticketSeller);

    // when
    theater.enter(audience);

    // then
    expect(audience.bag.amount).toBe(0);
    expect(audience.bag.hasTicket()).toBeTruthy();
    expect(ticketOffice.amount).toBe(ticketFee)
  });
});
