import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';

describe('BoardService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should determine game winner', () => {
    var board = ['', '', '', '', '', '', '', '', ''];
    board[0] = "X";
    board[4] = "X";
    board[8] = "X";
    expect(service.wonGame("X", board)).toBeTrue();
    //expect().nothing();
  });
});
