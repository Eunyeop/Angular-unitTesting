import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComp', ()=> {
  it('#clicked() should toggle #isOn', () => {
    
    const comp = new LightswitchComponent();
    
    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);

    comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);
    
    comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  
  });
});