import { EmpleadoPipePipe } from './empleado.pipe.pipe';

describe('EmpleadoPipePipe', () => {
  it('create an instance', () => {
    const pipe = new EmpleadoPipePipe();
    expect(pipe).toBeTruthy();
  });
});
