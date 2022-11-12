import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';

export const imageTextOne: { image: string; text: string }[] = [
	{
		image: 'assets/images/finger-print.png',
		text: 'Unlock your Mac',
	},
	{
		image: 'assets/images/apple-pay.png',
		text: 'Use Apple Pay for payments',
	},

	{
		image: 'assets/images/password-document.png',
		text: 'Open password-protected documents',
	},
	{
		image: 'assets/images/apple-tv.png',
		text: 'Make purchases on the Apple TV app',
	},
];

export const imageTextTwo: { image: string; text: string }[] = [
	{
		image: 'assets/images/charging.png',
		text: 'Charging',
	},
	{
		image: 'assets/images/monitor.png',
		text: 'External display',
	},

	{
		image: 'assets/images/data-transfer.png',
		text: 'Data transfer	up to 40Gb/s15',
	},
	{
		image: 'assets/images/devices.png',
		text: 'Connecting your devices',
	},
	{
		image: 'assets/images/wifi.png',
		text: 'Wi-Fi 6 up to 1.2Gb/s throughput15',
	},
	{
		image: 'assets/images/headphone.png',
		text: '3.5 mm headphone jack',
	},
];

export const cards = [
	{
		image: '/assets/images/m2-chip.png',
		title: ' Apple M2 Chip',
		text: ' M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations, or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro. M2 features up to a 10-core GPU, resulting in a big boost in graphics performance. And its media engine lets you play and edit up to 11 streams of 4K and up to 2 streams of 8K ProRes video.⁴ ',
	},

	{
		image: '/assets/images/unified-memory.svg',
		title: ' Unified Memory',
		text: ' The more unified memory (RAM) you choose, the more apps you can run simultaneously with a higher rate of performance.	The 13-inch MacBook Pro can be configured with up to 24GB for more fluid multitasking and easy handling of large files. ',
	},

	{
		image: 'assets/images/storage.svg',
		title: ' Storage',
		text: "Solid-state drive (SSD) storage is the amount of space your MacBook Pro has for your documents, photos, music, videos, and other files.It delivers significant performance and speed that you'll notice when you start up your Mac, launch an app, or browse your photos.",
	},
];

export const miniCards = [
	{
		icon: <AiOutlineDollarCircle />,
		title: 'Pay monthly at 0% APR',
		text: 'You can pay over time when you choose to check out with Apple Card Monthly Installments.†',
	},
	{
		icon: <BsBoxSeam />,
		title: 'Fast, free delivery',
		text: 'Choose free delivery or pick up available items at an Apple Store.',
	},
	{
		icon: <TiMessages />,
		title: 'Get help buying',
		text: 'Have a question? Call a Specialist or chat online.Call 1-800-MY-APPLE.',
	},
];
