import { DecimalPipe } from './decimal.pipe';

describe('DecimalPipe', () => {
  xit('should separate the digits of a number with commas', () => {
    const pipe = new DecimalPipe();
    
    expect(pipe.transform(123456789)).toEqual('123,456,789');
  });

  it('should separate the digits of a number with commas', () => {
    const pipe = new DecimalPipe();
    
    expect(pipe.transform(12345)).toEqual('12,345');
  });

  xit('should separate the digits of a number with commas', () => {
    const pipe = new DecimalPipe();
    
    expect(pipe.transform(12)).toEqual('12');
  });

  xit('should separate the digits of a number with commas', () => {
    const pipe = new DecimalPipe();
    
    expect(pipe.transform('123456789')).toEqual('123,456,789');
  });


});
