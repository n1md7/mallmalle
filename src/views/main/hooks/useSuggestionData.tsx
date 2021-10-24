import React from "react";

export type SuggestionCardType = {
  value: {
    discounted: string;
    current: string;
  },
  title: string,
  image: string;
};

export default function useSuggestionData(): SuggestionCardType[] {
  const [suggestions] = React.useState([{
    value: {
      discounted: '180.00',
      current: '120.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -1.png').default
  }, {
    value: {
      discounted: '280.00',
      current: '110.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -2.png').default
  }, {
    value: {
      discounted: '380.00',
      current: '120.10'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -3.png').default
  }, {
    value: {
      discounted: '420.00',
      current: '320.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -4.png').default
  }, {
    value: {
      discounted: '70.00',
      current: '20.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -5.png').default
  }, {
    value: {
      discounted: '80.00',
      current: '120.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -6.png').default
  }, {
    value: {
      discounted: '80.00',
      current: '120.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -7.png').default
  }, {
    value: {
      discounted: '80.00',
      current: '120.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -8.png').default
  }, {
    value: {
      discounted: '70.00',
      current: '130.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -9.png').default
  }, {
    value: {
      discounted: '180.00',
      current: '1120.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -4.png').default
  }, {
    value: {
      discounted: '80.00',
      current: '79.90'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -9.png').default
  }, {
    value: {
      discounted: '12.01',
      current: '98.00'
    },
    title: 'საზაფხულო ფეხსაცმელი',
    image: require('../../../assets/Group -10.png').default
  }]);
  // TODO: replace the data below with actual API call

  return suggestions;
}
