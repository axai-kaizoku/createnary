import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { CustomAccordionProps } from '@/types';

export default function CustomAccordion({
	title,
	description,
}: CustomAccordionProps) {
	return (
		<>
			<Accordion
				type="single"
				collapsible
				className="w-full backdrop-blur-md backdrop-filter  bg-[#D6D6D6] rounded-2xl px-5 bg-opacity-80">
				<AccordionItem value="item-1">
					<AccordionTrigger>{title}</AccordionTrigger>
					<AccordionContent>{description}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
