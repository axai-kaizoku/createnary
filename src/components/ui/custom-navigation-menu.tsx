import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const NavigationMenuCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			'relative z-10 flex max-w-max flex-1 items-center justify-center',
			className,
		)}
		{...props}>
		{children}
		<NavigationMenuViewportCustom />
	</NavigationMenuPrimitive.Root>
));
NavigationMenuCustom.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuListCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			'group flex flex-1 list-none items-center justify-center space-x-1',
			className,
		)}
		{...props}
	/>
));
NavigationMenuListCustom.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItemCustom = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyleCustom = cva(
	'group inline-flex h-12 w-fit items-center justify-center rounded-2xl bg-none px-2 py-2 border border-black text-sm font-normal hover:bg-transparent focus:bg-transparent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/ data-[state=open]:bg-accent/0',
);

const NavigationMenuTriggerCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyleCustom(), 'group', className)}
		{...props}>
		{children}{' '}
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTriggerCustom.displayName =
	NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContentCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
			className,
		)}
		{...props}
	/>
));
NavigationMenuContentCustom.displayName =
	NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLinkCustom = NavigationMenuPrimitive.Link;

const NavigationMenuViewportCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn('absolute left-0 top-full flex justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-black bg-transparent text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewportCustom.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicatorCustom = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className,
		)}
		{...props}>
		<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicatorCustom.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export {
	navigationMenuTriggerStyleCustom,
	NavigationMenuCustom,
	NavigationMenuListCustom,
	NavigationMenuItemCustom,
	NavigationMenuContentCustom,
	NavigationMenuTriggerCustom,
	NavigationMenuLinkCustom,
	NavigationMenuIndicatorCustom,
	NavigationMenuViewportCustom,
};
