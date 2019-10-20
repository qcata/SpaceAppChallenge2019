import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  constructor() { }

  public items: any[] = [
    {
      'name': 'Cigarettes',
      'description': 'The number one item found on the clear-up was cigarettes/ cigarette filters. Over 2,117,000 were found in the coastal clear-up. They make their way through drains and gutters and find themselves in the ocean. Animals and birds can mistake the butts for food and ingest them, along with the toxins present in cigarettes.Filters can take years to degrade and, even as they do, they break down into tiny pieces of plastic, called microplastics, which are an increasing hazard in waterways and oceans. Cigarette butts also carry a heavy load of toxic materials that can be harmful to nearby marine life.',
      'image': "https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2018/02/cigarettes-beach.jpg"
    },
    {
      'name': 'Food wrappers/containers',
      'description': 'The next worst offending ocean pollutant are food wrappers/ containers. 1,140,222 food wrappers were found in the International Coastal clear-up and it shows the evidential problem we have with plastic in our ocean. Most of these wrappers are not bio-degradable and just sit at the bottom of sea floors, waiting for a sea animal potentially ingest and choke on them.You can help by looking for alternative solutions to using plastics every day. By supporting companies that make edible and biodegradable food packaging and wrappers, you can help shift the industry toward eco-friendly and sustainable products. Pay attention to the wrappers on your cheese sticks, sandwiches and other food. If possible, try to purchase items that are not in plastic or designed for single-use.',
      'image': "https://northcoastcourier.co.za/wp-content/uploads/sites/73/2018/09/42212182_m-520x400.jpg"
    },
    {
      'name': 'Beverage bottles',
      'description': 'The number of plastic bottles being sold is predicted to rise even higher in future years. Around 20,000 bottles are bought every second which leads to a colossal amount of plastic waste which ends up in the ocean. Research by the Ellen MacArthur Foundation predicts that by 2050 the amount of plastic in the ocean will outweigh the amount of fish. Around 1,065,171 beverage bottles were found in the ocean clear-up.',
      'image': "https://drinkmaplewater.com/wp-content/uploads/2018/07/plastic-bottle-on-beach.jpg"
    },
    {
      'name': 'Plastic bags',
      'description': 'Over a million plastic bags were found in the ocean pollution clear-up. Sea animals are regularly found to be tangled up in plastic bags, with some even being choked to death by them. The hazard of plastic bags in the ocean is greater than ever before. Studies show new effects and are revealing the extent of the problem it poses. Sea animals are regularly found to be tangled up in plastic bags, with some even being choked to death by them. predicts that by 2050 the amount of plastic in the ocean will outweigh the amount of fish. Around 1,065,171 beverage bottles were found in the ocean clear-up.',
      'image': "https://plasticoceans.uk/wp-content/uploads/2015/12/plastic-bag-on-beach-1024x768.jpg"

    },
    {
      'name': 'Caps/Lids',
      'description': 'Bottle caps are small enough to be swallowed whole by birds or sea animals. This type of pollution can jam animal airways, or sit in their digestive systems causing them great discomfort and pain. 958,893 caps / lids were found in the clear-up with many more still in the sea.',
      'image': "https://image.shutterstock.com/z/stock-photo-people-has-left-bottle-caps-on-the-beach-after-good-day-1042516567.jpg"
    }
  ];

  getInformations() {
    return this.items;
  }

}
