export interface CustomButtonProps {
	href?: string;
	btnText: string;
	bgColor: string;
	textColor: string;
	onClick?: any;
}

export interface CustomAccordionProps {
	title: string;
	description: string;
}

export interface DetailPageNumProps {
	num: string;
}

export interface DetailPageCompProps {
	title: string;
	description: string;
	img: string;
	alt: string;
}

export interface CustomSliderProps {
	defaultValue: number;
	totalValue: number;
	minValue: number;
	steps: number;
	symbols?: string;
	onChange: any;
}

export interface SearchInfluencerProps {
	onChange: (e: any) => void;
}
