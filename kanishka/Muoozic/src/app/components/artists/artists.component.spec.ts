import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistsComponent } from './artists.component';
import { MasterService } from '../../model/services/master.service';
import { of } from 'rxjs';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;
  let mockService: jasmine.SpyObj<MasterService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('MasterService', ['get_all_artists']);
    mockService.get_all_artists.and.returnValue(of({ results: [] })); // Mock empty response

    await TestBed.configureTestingModule({
      declarations: [ArtistsComponent],
      providers: [{ provide: MasterService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load artists on init', () => {
    mockService.get_all_artists.and.returnValue(of({ results: [{ id: '1', name: 'Test Artist', image: '', shareurl: '' }] }));
    component.load_artists();
    expect(component.artist_list.length).toBe(1);
  });
});
