import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* why done()
  1. only for tests with async tasks
  2. timeout occurs when omitting 
  expected done call
  3. indicates no further testing
  */
  it('should have 10 players', (done) => {
    service.getPlayers().subscribe(res => {
      if (res instanceof Array) {
        expect(res.length).toEqual(10);
        done();
      }
    })
    
  })
});
