import { ElementRef, useEffect, useRef } from 'react';

const useOnClickOutside = (callback: () => void) => {
	const ref = useRef<ElementRef<'div'> | null>(null);

	useEffect(() => {
		const listener = (e: Event) => {
			if (ref?.current && !ref.current.contains(e?.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, []);

	return { ref };
};

export default useOnClickOutside;
