import breadBag from '~/assets/images/beeswax-bread-bag.jpg'
import zipper from '~/assets/images/bread-bag-l-zip.jpg'

export const productCategories = [
  {
    id: 1, slug: 'beeswax-bread-bags', path: '/beeswax-bread-bags/', title: 'Beeswax Bread Bags', image: breadBag,
    description: 'Choose a buckle or L-shaped zipper closure and discuss custom sizing and logo printing.',
    photos: [{ src: breadBag, label: 'YX-2025 · Buckle closure' }, { src: zipper, label: 'YX-2027 · L-shaped zipper' }],
    specs: [['Standard size', '33 cm wide × 43 cm high for both models'], ['Minimum order', '200 bags'], ['Customization', 'Size and logo printing']],
    heading: 'Choosing a closure and print',
    detail: 'Compare the buckle and zipper openings above. For a first print run, discuss digital direct printing and prepare lettering at least 3 mm high. Reactive printing starts at 2,000 metres of fabric; this threshold is separate from the minimum order of 200 bags.',
    brief: 'Tell us your preferred model, bag size, artwork position, quantity and destination.'
  },
  {
    id: 2, slug: 'canvas-cosmetic-bags', path: '/bags/canvas-cosmetic-bags', title: 'Canvas Cosmetic Bags',
    description: 'A compact pouch for beauty collections, retail gift sets and branded giveaways.',
    photos: [],
    specs: [['Project type', 'Beauty kits, retail gift sets or giveaways'], ['Fit and opening', 'Specify what the pouch needs to hold'], ['Artwork', 'Indicate print position and finished logo size']],
    heading: 'Plan the pouch around the contents',
    detail: 'A brush set and a group of skincare bottles need different openings. Share the dimensions of the longest or widest item, whether a lining is needed, and which face should carry the artwork.',
    brief: 'Include your target pouch dimensions, contents, lining preference and order quantity. Materials, print options and minimum quantity are confirmed for each project.'
  },
  {
    id: 3, slug: 'canvas-tote-bags', path: '/bags/canvas-tote-bags', title: 'Canvas Tote Bags',
    description: 'Carry bags for retail, events and corporate gifting. Enquire about your project requirements.',
    photos: [],
    specs: [['Project type', 'Retail bags, event merchandise or corporate gifts'], ['Carry style', 'Specify hand carry or shoulder carry'], ['Shape', 'Provide bag width, height and any required depth']],
    heading: 'Choose the dimensions and handle drop',
    detail: 'Start with what the tote will carry. A flat bag for printed material has a different brief from a bag for boxed gifts. Specify the desired depth and the clearance between the handles and the top edge.',
    brief: 'Send the intended contents, preferred handle length, logo placement, quantity and delivery destination. Fabric, construction and minimum quantity will be confirmed in the quotation.'
  }
]
