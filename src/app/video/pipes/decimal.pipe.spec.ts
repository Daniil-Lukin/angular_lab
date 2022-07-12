import { DecimalPipe } from './decimal.pipe';

describe('DecimalPipe', () => {
  const pipe = new DecimalPipe();
  
  beforeEach(() => {
    const pipe = new DecimalPipe();
  });

  it('should separate the digits of a number with commas', () => {
    expect(pipe.transform(123456789)).toEqual('123,456,789');
  });

  it('should separate the digits of a number with commas', () => {
    expect(pipe.transform(12345)).toEqual('12,345');
  });

  it('should separate the digits of a number with commas', () => {
    expect(pipe.transform(12)).toEqual('12');
  });

  it('should separate the digits of a number with commas', () => {
    expect(pipe.transform('123456789')).toEqual('123,456,789');
  });


});
