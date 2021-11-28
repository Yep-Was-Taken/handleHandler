import { GenericValidator } from './genericvalidator';

describe('Genericvalidator', () => {
  it('should create an instance', () => {
    expect(new GenericValidator({    
      name: {    
        required: 'Posting name is required.',    
        minlength: 'Posting name must be at least three characters.',    
        maxlength: 'Posting name cannot exceed 50 characters.'    
      },    
      cityname: {    
        required: 'Posting city name is required.',    
      }    
    })).toBeTruthy();
  });
});
