import { browser } from "$app/environment";

/** Dispatch event on click outside of node */
export function clickOutside(node: Node) {
	const handleClick = (event: MouseEvent) => {
		if (
			node &&
			!node.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			node.dispatchEvent(
				new CustomEvent('click_outside', node as CustomEventInit)
			);
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export const isMobileScreen = (() => {
	if (browser) {
		return (window.innerWidth < 768)
	}

	return false;
})();