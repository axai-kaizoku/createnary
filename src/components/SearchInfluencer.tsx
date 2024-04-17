'use client';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { influencers } from '@/constants';

export default function SearchInfluencer() {
	const [selected, setSelected] = useState(influencers[0]);

	return (
		<div className="inset-0 z-[9]  w-full">
			<Listbox
				value={selected}
				onChange={setSelected}>
				<div className="relative mt-1">
					<Listbox.Button className="relative h-11 border border-slider-bg w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-primary-blue focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2  sm:text-sm">
						<span className="block truncate">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center p-2 pr-5">
							<Image
								src="/chevron-down.svg"
								alt="chevron-down"
								width={14}
								height={14}
								className="object-contain text-gray-400"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
							{influencers.map((person, personIdx) => (
								<Listbox.Option
									key={personIdx}
									disabled={personIdx === 0}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-3 pr-4 ${
											active
												? 'bg-primary-blue/20 text-primary-blue'
												: 'text-gray-900'
										}`
									}
									value={person}>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}>
												{person.name}
											</span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
