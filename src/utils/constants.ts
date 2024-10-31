import { PATHS } from './enum';

export const navLinks = [
  { label: 'Pagination', route: PATHS.PAGINATION },
  {
    label: 'Custom Select',
    route: PATHS.CUSTOMSELECT,
  },
  {
    label: 'Accordion',
    route: PATHS.ACCORDION,
  },
];

export const faqData = [
  {
    question: 'How long does it take to ship my order?',
    answer: 'Orders are usually shipped within 1-2 business days after placing the order.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and digital wallets including Apple Pay and Google Pay.',
  },
  {
    question: 'What shipping options do you have?',
    answer:
      'We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping for domestic orders.',
  },
  {
    question: 'How do I make changes to an existing order?',
    answer:
      'To modify an existing order, please contact our customer service team within 24 hours of placing your order. Changes after this period may not be possible.',
  },
  {
    question: 'When will my order arrive?',
    answer:
      "Delivery times vary based on your location and chosen shipping method. You'll receive a tracking number via email once your order ships.",
  },
];